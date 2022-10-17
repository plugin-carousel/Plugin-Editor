/**
 * @file 有关task hall的type
 * @date 2022-10-10
 * @author xuejie.he
 * @lastModify xuejie.he 2022-10-10
 */
/* <------------------------ **** Complex data in the initialState type START**** ------------------------------ */

/**
 * industry item type
 */
export interface IndustryResponse {
    id: string;
    name: string;
    status: number;
}
/* <------------------------ **** Complex data in the initialState type END**** ------------------------------ */

/* <------------------------------------ **** initialState type start **** ------------------------------------ */
export interface TaskHallReducerProps {
    publicIndustry: {
        data: IndustryResponse[] | null;
        loading: boolean;
    };
}
/* <------------------------------------ **** initialState type end **** ------------------------------------ */

/* <------------------------------------ **** enum action types START **** ------------------------------------ */
export enum SAGA_ACTION_TYPE {
    GET_INDUSTRY_LIST_SAGA = 'GET_INDUSTRY_LIST_SAGA',
}

/* <------------------------------------ **** enum action types END **** ------------------------------------ */

/* <------------------------------------ **** payload types START **** ------------------------------------ */

export interface GetIndustryListAction {
    type: SAGA_ACTION_TYPE.GET_INDUSTRY_LIST_SAGA;
}

/* <------------------------------------ **** payload types END **** ------------------------------------ */
