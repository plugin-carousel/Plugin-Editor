/**
 * @file GameStyleBox
 * @date 2022-10-24
 * @author wangtianci
 * @lastModify wangtianci 2022-10-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import style from './style.scss';
import { gameStyleOverviewList, styleItemType } from '~/DefaultData/styleOverview';
import { useLocation, useNavigate } from 'react-router-dom';
import { ScrollComponent } from '@datareachable/dr_front_componentlibrary';

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
const GameStyleBox = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/

    /**
     * navigate
     */
    const navigate = useNavigate();

    /**
     * location
     */
    const location = useLocation();

    /**
     * 要渲染的图片列表
     */
    let renderList = location.state?.renderList;
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /**
     * 点击图片 跳转到plugin-detail
     * @param style
     * @param index
     */
    const handleClickImg = (style: string, index: number) => {
        // const state: statepProps = { style, index, renderList };
        if (location.state?.renderList !== undefined) {
            const state: statepProps = { style, index, renderList };
            navigate('/plugin-detail', { state });
        } else {
            renderList = gameStyleOverviewList;
            const state: statepProps = { style, index, renderList };
            navigate('/plugin-detail', { state });
        }
    };
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** EFFECT END **** ------------------------------------ */
    return (
        <ScrollComponent bodyClassName={style.ScrollComponent}>
            {location.state?.renderList !== undefined ? (
                renderList.length !== 0 ? (
                    renderList.map((item, i) => {
                        return (
                            <div
                                className={style.pluginEditorHome_listItem}
                                key={item.id}
                                onClick={() => handleClickImg(item.style, i)}
                            >
                                <img src={item.cover} />
                            </div>
                        );
                    })
                ) : (
                    <div className={style.pluginEditorHome_none}>无搜索结果</div>
                )
            ) : (
                gameStyleOverviewList.map((item, i) => {
                    return (
                        <div
                            className={style.pluginEditorHome_listItem}
                            key={item.id}
                            onClick={() => handleClickImg(item.style, i)}
                        >
                            <img src={item.cover} />
                        </div>
                    );
                })
            )}
        </ScrollComponent>
    );
};
export default GameStyleBox;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
