/**
 * @file 入口
 * @date 2022-10-10
 * @author xuejie.he
 * @lastModify xuejie.he 2022-10-10
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import {
    getJwtKey,
    NavigationBar,
    ScrollComponent,
} from '@datareachable/dr_front_componentlibrary';
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

    /**
     * 点击登录按钮的时候
     */
    const handleSignInClick = () => {
        //
    };
    /**
     * 点击退出登录的时候
     */
    const handleSignOutClick = () => {
        window.localStorage.removeItem(getJwtKey());
        //访问退出登录接口
    };

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <>
            <NavigationBar
                handleLoginClick={handleSignInClick}
                handleSignOutClick={handleSignOutClick}
            />
            <ScrollComponent className={styles.bodyWrap} width="100%" height="calc(100vh - 6.4rem)">
                <Outlet />
            </ScrollComponent>
        </>
    );
};
export default Entry;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
