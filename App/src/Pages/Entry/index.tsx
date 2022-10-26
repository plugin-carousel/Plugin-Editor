/**
 * @file 入口
 * @date 2022-10-10
 * @author xuejie.he
 * @lastModify xuejie.he 2022-10-10
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { ScrollComponent } from '@datareachable/dr_front_componentlibrary';
import { Outlet } from 'react-router-dom';
import styles from './style.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Entry = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/

    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <>
            <ScrollComponent className={styles.bodyWrap} width="100%" height="100vh">
                <Outlet />
            </ScrollComponent>
        </>
    );
};
export default Entry;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
