/**
 * @file root reducer
 * @date 2020-09-22
 * @author Frank
 * @lastModify Frank 2020-09-22
 */
import taskHall from './TaskHall/reducer';
// combine all the reducer in here
const rootReducer = { [taskHall.name]: taskHall.reducer };
// export the root reducer state

export default rootReducer;
