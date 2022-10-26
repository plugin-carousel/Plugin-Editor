/**
 * @file BreadCrumb
 * @date 2022-10-25
 * @author wangtianci
 * @lastModify wangtianci 2022-10-25
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
// import React from 'react';
import style from './style.scss';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@datareachable/dr_front_componentlibrary';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const BreadCrumb = ({ styleDetailList, selectedImg, state }): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/

    /**
     * navigate
     */
    const navigate = useNavigate();
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /**
     * 点击返回上一页
     */
    const handleBackToEditor = () => {
        navigate(-1);
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
    return (
        <div className={style.breadCrumb_container}>
            {styleDetailList &&
                styleDetailList.map((item, i) => {
                    if (i === selectedImg) {
                        return (
                            <div
                                className={style.pluginEditorDetailHall_breadCrumbs}
                                key={item?.id}
                            >
                                <div
                                    className={style.pluginEditorDetailHall_home}
                                    onClick={handleBackToEditor}
                                >
                                    <Icon type="home" />
                                    插件主题风格 /
                                </div>
                                <div className={style.pluginEditorDetailHall_currentName}>
                                    {state.style === 'China'
                                        ? '中国风'
                                        : state.style === 'tec'
                                        ? '科技风'
                                        : '游戏风'}
                                    <span
                                        className={style.pluginEditorDetailHall_currentNameDetail}
                                    >
                                        {styleDetailList && styleDetailList[selectedImg]?.title}
                                    </span>
                                </div>
                            </div>
                        );
                    }
                })}
        </div>
    );
};
export default BreadCrumb;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
