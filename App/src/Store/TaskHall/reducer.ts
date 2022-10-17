/**
 * @file 有关组织的reducer
 * @date 2021-09-15
 * @author xuejie.he
 * @lastModify xuejie.he 2021-09-15
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as types from './types';

const initialState: types.TaskHallReducerProps = {
    publicIndustry: {
        data: null,
        loading: true,
    },
};

export default createSlice({
    name: 'taskHall',
    initialState,
    reducers: {
        setIndustryList: (
            state,
            action: PayloadAction<{ loading: boolean; data?: types.IndustryResponse[] }>,
        ) => {
            if (action.payload.data) {
                state.publicIndustry.data = [...action.payload.data];
            }
            state.publicIndustry.loading = action.payload.loading;
        },
    },
});
