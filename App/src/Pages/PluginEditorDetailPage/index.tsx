/**
 * @file PluginEditorDetail
 * @date 2022-10-17
 * @author wangtianci
 * @lastModify wangtianci 2022-10-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
// import React from "react";
import style from './style.scss';
import { Icon } from '@datareachable/dr_front_componentlibrary';
import getClassNames from '~/Utils/getClassNames';

import {
    ChinaStyleDetailList,
    gameStyleDetailList,
    tecStyleDetailList,
    styleItemType,
} from '~/DefaultData/styleDetail';
import { useEffect, useState, useRef } from 'react';
import { useLocation, Location } from 'react-router-dom';
import BreadCrumb from './Components/BreadCrumb';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface statepProps {
    style: string;
    index: number;
    renderList: styleItemType[];
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PluginEditorDetail = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/

    /**
     * 图片列表
     */
    const [styleDetailList, setStyleDetailList] = useState<Array<styleItemType | undefined>>();

    /**
     * 选中的图片的index
     */
    const [selectedImg, setSelectedImg] = useState(0);

    /**
     * location
     */
    const location: Location = useLocation();

    /**
     * location.state
     */
    const state = location.state as statepProps;

    /**
     * selectionListEle
     */
    const selectionListEle = useRef<HTMLDivElement>(null);

    /**
     * selectionImgEle
     */
    const selectionImgEle = useRef<HTMLDivElement>(null);
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /**
     * 点击图片列表，设置大图片的index
     * @param index
     */
    const handleClickImg = (index: number) => {
        setSelectedImg(index);
    };

    /**
     * 点击显示上一张
     */
    const handleSelectPreviousImg = () => {
        let previousImg = selectedImg - 1;
        if (previousImg === -1 && styleDetailList?.length) {
            previousImg = styleDetailList?.length - 1;
        }
        const imgCurrentLeft = 178 * previousImg;
        setSelectedImg(previousImg);
        selectionListEle.current?.scrollTo({
            left: imgCurrentLeft,
            behavior: 'smooth',
        });
    };

    /**
     * 点击显示上一张
     */
    const handleSelectNextImg = () => {
        let nextImg = selectedImg + 1;
        if (styleDetailList?.length && nextImg === styleDetailList?.length) {
            nextImg = 0;
        }

        setSelectedImg(nextImg);
        const imgCurrentLeft = 178 * nextImg;
        selectionListEle.current?.scrollTo({
            left: imgCurrentLeft,
            behavior: 'smooth',
        });
    };

    //获取selectionList
    const selectionList = document.querySelector('.pluginEditorDetail_selectionList');

    /**
     * 点击向前滑动
     */
    const handleSlidForward = () => {
        if (selectionList) {
            selectionList.scrollLeft = selectionList.scrollLeft + selectionList.clientWidth;
        }
    };

    /**
     * 点击向后滑动
     */
    const handleSlidBack = () => {
        if (selectionList) {
            selectionList.scrollLeft = selectionList.scrollLeft - selectionList.clientWidth;
        }
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /**
     * 设置进页面时，要渲染的图片列表
     */
    useEffect(() => {
        let showList: Array<styleItemType | undefined> = [];
        if (state.style === 'China') {
            showList = state.renderList.map((item) => {
                return ChinaStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
            })
                ? state.renderList.map((item) => {
                      return ChinaStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
                  })
                : ChinaStyleDetailList;
            setStyleDetailList(showList);
        } else if (state.style === 'game') {
            showList = state.renderList.map((item) => {
                return gameStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
            })
                ? state.renderList.map((item) => {
                      return gameStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
                  })
                : gameStyleDetailList;
            setStyleDetailList(showList);
        } else {
            showList = state.renderList.map((item) => {
                return tecStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
            })
                ? state.renderList.map((item) => {
                      return tecStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
                  })
                : tecStyleDetailList;
            setStyleDetailList(showList);
        }
    }, [state.style, state.renderList]);

    /**
     * 设置进页面时，被选中的图片
     */
    useEffect(() => {
        setSelectedImg(state.index);
    }, [state]);
    /* <------------------------------------ **** EFFECT END **** ------------------------------------ */

    return (
        <div className={style.PluginEditorDetail_container}>
            <div className={style.pluginEditorDetail_header}>
                <div className={style.pluginEditorDetail_logo}>dataReachable</div>
            </div>

            <div className={style.pluginEditorDetail_main}>
                <div className={style.pluginEditorDetail_imgShowContainer}>
                    <div
                        className={style.pluginEditorDetail_leftButton}
                        onClick={handleSelectPreviousImg}
                    >
                        <Icon type="open" />
                    </div>

                    {styleDetailList &&
                        styleDetailList.map((item, i) => {
                            if (i === selectedImg) {
                                return (
                                    <div
                                        className={style.pluginEditorDetail_imgShowBox}
                                        key={item?.id}
                                    >
                                        <BreadCrumb
                                            styleDetailList={styleDetailList}
                                            state={state}
                                            selectedImg={selectedImg}
                                        />
                                        <img src={item?.cover} />
                                    </div>
                                );
                            }
                        })}

                    <div
                        className={style.pluginEditorDetail_rightButton}
                        onClick={handleSelectNextImg}
                    >
                        <Icon type="open" />
                    </div>
                </div>
            </div>

            <div className={style.pluginEditorDetail_footer}>
                <div className={style.pluginEditorDetail_selectionListBox}>
                    <div
                        className={style.pluginEditorDetail_leftSelectionButton}
                        onClick={handleSlidBack}
                    >
                        <Icon type="open" />
                    </div>
                    <div className={style.pluginEditorDetail_selectionList} ref={selectionListEle}>
                        {styleDetailList &&
                            styleDetailList.map((item, i) => {
                                return i === selectedImg ? (
                                    <div
                                        className={style.pluginEditorDetail_selectionImg}
                                        key={item?.id}
                                        ref={selectionImgEle}
                                    >
                                        <div
                                            className={getClassNames({
                                                [style.pluginEditorDetailPage_imgBox]: true,
                                                [style.pluginEditorDetailPage_imgBox_active]: true,
                                            })}
                                        >
                                            <img
                                                src={item?.cover}
                                                className={getClassNames({
                                                    [style.pluginEditorDetail_img_active]: true,
                                                })}
                                                onClick={() => handleClickImg(i)}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className={style.pluginEditorDetail_selectionImg}
                                        key={item?.id}
                                    >
                                        <div className={style.pluginEditorDetailPage_imgBox}>
                                            <img
                                                src={item?.cover}
                                                className={style.pluginEditorDetail_Img}
                                                onClick={() => handleClickImg(i)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div
                        className={style.pluginEditorDetail_rightSelectionButton}
                        onClick={handleSlidForward}
                    >
                        <Icon type="open" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PluginEditorDetail;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
