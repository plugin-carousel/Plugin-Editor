/**
 * @file 有关组织的行为
 * @date 2022-10-10
 * @author xuejie.he
 * @lastModify xuejie.he 2022-10-10
 */
import * as types from './types';
import reducer from './reducer';

const getIndustryList = (): types.GetIndustryListAction => {
    return {
        type: types.SAGA_ACTION_TYPE.GET_INDUSTRY_LIST_SAGA,
    };
};

const { setIndustryList: setIndustryListReducer } = reducer.actions;

export { getIndustryList, setIndustryListReducer };
