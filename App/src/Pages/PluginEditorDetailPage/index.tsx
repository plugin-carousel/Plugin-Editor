/**
 * @file PluginEditorDetail
 * @date 2022-10-17
 * @author wangtianci
 * @lastModify wangtianci 2022-10-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
// import React from "react";
import { Icon } from '@datareachable/dr_front_componentlibrary';
import getClassNames from '~/Utils/getClassNames';
import style from './style.scss';

import { useEffect, useRef, useState } from 'react';
import { Location, useLocation, useNavigate } from 'react-router-dom';
import {
    ChinaStyleDetailList,
    gameStyleDetailList,
    styleItemType,
    tecStyleDetailList,
} from '~/DefaultData/styleDetail';
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
     * navigate
     */
    const navigate = useNavigate();
    /**
     * selectionListEle
     */
    const selectionListEle = useRef<HTMLDivElement>(null);

    /**
     * selectionImgEle
     */
    const selectionImgEle = useRef<HTMLDivElement>(null);

    /**
     * selectionImgEle width
     */
    const selectionImgEleWidth = selectionImgEle.current?.offsetWidth;

    /**
     *
     */
    const pageContainerEle = useRef<HTMLDivElement>(null);
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
        setSelectedImg(previousImg);
        if (selectionImgEleWidth) {
            const imgCurrentLeft = selectionImgEleWidth * previousImg;
            selectionListEle.current?.scrollTo({
                left: imgCurrentLeft,
                behavior: 'smooth',
            });
        }
    };

    /**
     * 点击显示下一张
     */
    const handleSelectNextImg = () => {
        let nextImg = selectedImg + 1;
        if (styleDetailList?.length && nextImg === styleDetailList?.length) {
            nextImg = 0;
        }

        setSelectedImg(nextImg);
        if (selectionImgEleWidth) {
            const imgCurrentLeft = selectionImgEleWidth * nextImg;
            selectionListEle.current?.scrollTo({
                left: imgCurrentLeft,
                behavior: 'smooth',
            });
        }
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
     * 设置进页面时，被选中的图片
     */
    useEffect(() => {
        setSelectedImg(state.index);

        /**
         * 更新selectionList的left值
         */
        if (selectionImgEleWidth) {
            const imgCurrentLeft = selectionImgEleWidth * state.index;
            selectionListEle.current?.scrollTo({
                left: imgCurrentLeft,
                behavior: 'smooth',
            });
        }
    }, [state, styleDetailList, selectionImgEleWidth]);

    /**
     * 视口宽度变化，更换图片
     */
    const containerWidth = pageContainerEle.current?.clientWidth;
    useEffect(() => {
        if (containerWidth && containerWidth < 516) {
            setStyleDetailList(state.renderList);
        } else {
            let showList: Array<styleItemType | undefined> = [];
            if (state.style === 'China') {
                showList = state.renderList.map((item) => {
                    return ChinaStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
                })
                    ? state.renderList.map((item) => {
                          return ChinaStyleDetailList.find(
                              (Detailitem) => Detailitem.id === item.id,
                          );
                      })
                    : ChinaStyleDetailList;
                setStyleDetailList(showList);
            } else if (state.style === 'game') {
                showList = state.renderList.map((item) => {
                    return gameStyleDetailList.find((Detailitem) => Detailitem.id === item.id);
                })
                    ? state.renderList.map((item) => {
                          return gameStyleDetailList.find(
                              (Detailitem) => Detailitem.id === item.id,
                          );
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
        }
    }, [containerWidth, state.style, state.renderList]);

    /* <------------------------------------ **** EFFECT END **** ------------------------------------ */

    return (
        <div className={style.PluginEditorDetail_container} ref={pageContainerEle}>
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
                                        <div
                                            className={
                                                style.pluginEditorDetailPage_backButtom_currentTitle
                                            }
                                        >
                                            <div
                                                className={style.pluginEditorDetailPage_backButtom}
                                                onClick={() => navigate(-1)}
                                            >
                                                <Icon type="nextArrow" />
                                                返回
                                            </div>
                                            <div
                                                className={
                                                    style.pluginEditorDetailPage_currentTitle
                                                }
                                            >
                                                {state.style === 'China'
                                                    ? '中国风'
                                                    : state.style === 'tec'
                                                    ? '科技风'
                                                    : '游戏风'}
                                                <span
                                                    className={
                                                        style.pluginEditorDetailHall_currenTitleDetail
                                                    }
                                                >
                                                    (
                                                    {styleDetailList &&
                                                        styleDetailList[selectedImg]?.title}
                                                    )
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className={style.pluginEditorDetailPage_img_Skeleton}
                                        ></div>
                                        <img
                                            // crossOrigin="use-credentials"
                                            src={item?.cover}
                                            onLoad={() => {
                                                const imgSkeleton = document.querySelector(
                                                    '.pluginEditorDetailPage_img_Skeleton',
                                                ) as HTMLDivElement;
                                                imgSkeleton.style.display = 'none';
                                            }}
                                        />
                                        <div className={style.pluginEditorDetailPage_mobileImgBox}>
                                            <div
                                                className={
                                                    style.pluginEditorDetail_mobileLeftButton
                                                }
                                                onClick={handleSelectPreviousImg}
                                            >
                                                <Icon type="open" />
                                            </div>
                                            <img src={item?.cover} />
                                            <div
                                                className={
                                                    style.pluginEditorDetail_MobileRightButton
                                                }
                                                onClick={handleSelectNextImg}
                                            >
                                                <Icon type="open" />
                                            </div>
                                        </div>
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
                                                // crossOrigin="use-credentials"
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
                                                // crossOrigin="use-credentials"
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
