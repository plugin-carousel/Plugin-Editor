/**
 * @file
 * @date 2021-1-13
 * @author Jack
 * @lastModify  2021-1-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Canceler } from 'axios';
import i18n from '~/Locales/i18n';
import mainDomain from './mainDomain';
import { jwtKey, redirectToSignInPage } from './redirectDomain';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

export type CustomAxiosResponse<T> = AxiosResponse<{
    data?: T;
    code: number;
    message: string;
}> | void;

// create a axios instanse
const service = axios.create({
    baseURL: mainDomain, // api base_url
    timeout: 10000, // request timeout
});

// cancel request

export let allPendingRequestsRecord: (AxiosRequestConfig & {
    c: Canceler;
})[] = [];

// const ignoredRequest = [
//     '/api/v1/info',
//     '/api/v1/organization/list',
//     '/api/v1/entry/info',
//     '/api/v1/session/logout',
//     '/api/v1/session/status',
//     `${mainDomain}/msg/notif/stable/notification/readed`,
// ];

// clear all request
export const clearRequestList = (): void => {
    for (let i = 0; i < allPendingRequestsRecord.length; ) {
        allPendingRequestsRecord[i].c();
        ++i;
    }

    allPendingRequestsRecord = [];
};

// remove request
export const removeRequest = (config: AxiosRequestConfig): void => {
    const n = allPendingRequestsRecord.findIndex((index) => {
        let state = true;
        for (const key in config) {
            if (config[key] !== index[key]) {
                state = false;
                break;
            }
        }
        if (state) {
            index.c();
        }
        return state;
    });
    allPendingRequestsRecord.splice(n, 1);
};

// request interceptors
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (window.navigator.onLine === false) {
            throw new axios.Cancel(i18n.t('contractNetworkAlertTip.networkNotGood'));
        }
        const jwt = window.localStorage.getItem(`${jwtKey}`);
        if (jwt) {
            return Object.assign({}, config, { ...config.headers, ['DR-AUTH']: jwt });
        }
        return config;
    },
    (error: AxiosError) => {
        console.log('request error-->', error); // for debug
        return error;
    },
);

// response interceptors
service.interceptors.response.use(
    (response: AxiosResponse<{ code: number; message: string }>) => {
        // removeRequest(response.config);
        if (response.data.code === 403001 || response.data.code === 401001) {
            window.localStorage.removeItem(`${jwtKey}`);
            if (process.env.NODE_ENV !== 'development') {
                window.location.replace(`${redirectToSignInPage}&lang=${i18n.language}`);
            }
        }
        return response;
    },
    (error: AxiosError) => {
        // removeRequest(error.config);
        if (!axios.isCancel(error)) {
            return error;
        }
    },
);
export default service;
