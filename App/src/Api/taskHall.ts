/**
 * @file task hall相关的api请求
 * @date 2022-10-11
 * @author xuejie.he
 * @lastModify xuejie.he 2022-10-11
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import axios from './interceptor';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** API response START **** ------------------------------------ */
/* <------------------------------------ **** API response END **** ------------------------------------ */
/* <------------------------------------ **** API START **** ------------------------------------ */

/**
 * 获取公共的行业列表
 */
export const getPublicIndustry = () => {
    return axios.request({
        url: '/pub/industry/all',
        method: 'get',
    });
};
