/**
 * @file 有关组织的saga
 * @date 2022-10-10
 * @author xuejie.he
 * @lastModify xuejie.he 2022-10-10
 */

import { message } from '@datareachable/dr_front_componentlibrary';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { CustomAxiosResponse } from '~/Api/interceptor';
import { getPublicIndustry } from '~/Api/taskHall';
import * as actions from './actions';
import * as types from './types';
import i18n from './../../Locales/i18n';

function* handleGetIndustryListSaga() {
    yield put(actions.setIndustryListReducer({ loading: true }));
    const res: CustomAxiosResponse<types.IndustryResponse[]> = yield call(getPublicIndustry);
    if (res?.data.code === 200001) {
        yield put(actions.setIndustryListReducer({ data: res.data.data, loading: false }));
    } else {
        yield put(actions.setIndustryListReducer({ loading: false }));
        message.auto({
            type: 'error',
            content: `${i18n.t(res?.data?.message ?? 'Get industry list failed!')}`,
        });
    }
}

function* watchSagaAction() {
    yield takeLatest(types.SAGA_ACTION_TYPE.GET_INDUSTRY_LIST_SAGA, handleGetIndustryListSaga);
}

const sagas = [fork(watchSagaAction)];

export default sagas;
