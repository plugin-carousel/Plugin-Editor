/**
 * @file PluginEditorHome
 * @date 2022-10-17
 * @author wangtianci
 * @lastModify wangtianci 2022-10-17
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useEffect, useState } from 'react';
import style from './style.scss';
import { Icon } from '@datareachable/dr_front_componentlibrary';
import getClassNames from '~/Utils/getClassNames';
import {
    ChinaStyleOverviewList,
    gameStyleOverviewList,
    tecStyleOverviewList,
    styleItemType,
} from '~/DefaultData/styleOverview';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
interface styleSelectionItem {
    id: string;
    content: string;
    status: boolean;
}

/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PluginEditorHome = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/

    /**
     * 风格列表
     */
    const styleSelectionList: styleSelectionItem[] = [
        { id: 'ChinaStyle', content: '中国风格', status: true },
        { id: 'gameStyle', content: '游戏风格', status: false },
        { id: 'tecStyle', content: '科技风格', status: false },
    ];

    /**
     * 初始化风格列表
     */
    const [selectStyleList, setSelectStyleList] = useState(styleSelectionList);

    /**
     * 搜索框value
     */
    const [searchValue, setSearchValue] = useState('');

    /**
     * location
     */
    const location = useLocation();

    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /**
     * 点击选择风格
     * @param id
     */
    const handleSelectstyle = (id: string) => {
        setSelectStyleList(
            selectStyleList.map((item) => {
                if (item.id === id) {
                    return { ...item, status: true };
                } else {
                    return { ...item, status: false };
                }
            }),
        );
        if (id === 'ChinaStyle') {
            navigate('/');
        } else if (id === 'gameStyle') {
            navigate('/gamestyle');
        } else {
            navigate('tecstyle');
        }
    };

    const navigate = useNavigate();
    /**
     * 模糊查询
     * @param {Array} list 原数组
     * @param {String} keyword 查询关键字
     * @return {Array}     查询结果
     */
    const fuzzyQuery = (list: styleItemType[], keyword: string) => {
        const reg = new RegExp(keyword);
        const arr: styleItemType[] = [];
        for (let i = 0; i < list.length; i++) {
            if (reg.test(list[i].title) || reg.test(list[i].style)) {
                arr.push(list[i]);
            }
        }
        return arr;
    };

    /**
     * 点击搜索
     */
    const handleClickSearch = () => {
        /**
         * 当前的风格
         */
        const currentStyle = selectStyleList.filter((item) => item.status === true);

        /**
         * 将要筛选的列表
         */
        let searchList: styleItemType[] = [];

        /**
         * 筛选后的列表
         */
        let filterList: styleItemType[] = [];
        if (currentStyle[0].id === 'ChinaStyle' && searchValue) {
            searchList = ChinaStyleOverviewList;

            filterList = fuzzyQuery(searchList, searchValue);

            navigate('/', { state: { renderList: filterList } });
        } else if (currentStyle[0].id === 'ChinaStyle' && !searchValue) {
            searchList = ChinaStyleOverviewList;

            navigate('/', { state: { renderList: searchList } });
        } else if (currentStyle[0].id === 'gameStyle' && searchValue) {
            searchList = gameStyleOverviewList;

            filterList = fuzzyQuery(searchList, searchValue);

            navigate('/gamestyle', { state: { renderList: filterList } });
        } else if (currentStyle[0].id === 'gameStyle' && !searchValue) {
            searchList = gameStyleOverviewList;

            filterList = fuzzyQuery(searchList, searchValue);
            navigate('/gamestyle', { state: { renderList: searchList } });
        } else if (currentStyle[0].id === 'tecStyle' && searchValue) {
            searchList = tecStyleOverviewList;

            filterList = fuzzyQuery(searchList, searchValue);
            navigate('/tecstyle', { state: { renderList: filterList } });
        } else if (currentStyle[0].id === 'tecStyle' && !searchValue) {
            searchList = tecStyleOverviewList;

            navigate('/tecstyle', { state: { renderList: searchList } });
        }
        setSearchValue('');
    };

    /**
     * 点击事件
     * @param e
     */
    const handleKeyup = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Escape') {
            setSearchValue('');
        }
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            handleClickSearch();
        }
    };

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    /* <------------------------------------ **** EFFECT START **** ------------------------------------ */
    /************* This section will include this component general function *************/

    /**
     * 设置进入页面时，被选中的风格
     */
    useEffect(() => {
        if (location.pathname === '/') {
            setSelectStyleList(
                selectStyleList.map((item) => {
                    if (item.id === 'ChinaStyle') {
                        return { ...item, status: true };
                    } else {
                        return { ...item, status: false };
                    }
                }),
            );
        } else if (location.pathname === '/gamestyle') {
            setSelectStyleList(
                selectStyleList.map((item) => {
                    if (item.id === 'gameStyle') {
                        return { ...item, status: true };
                    } else {
                        return { ...item, status: false };
                    }
                }),
            );
        } else {
            setSelectStyleList(
                selectStyleList.map((item) => {
                    if (item.id === 'tecStyle') {
                        return { ...item, status: true };
                    } else {
                        return { ...item, status: false };
                    }
                }),
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /* <------------------------------------ **** EFFECT END **** ------------------------------------ */

    return (
        <div className={style.PluginEditorHome_container}>
            <div className={style.PluginEditorHome_header}>
                <div className={style.PluginEditorHome_logo}>dataReachable</div>
                <div className={style.pluginEditorHome_searchBox}>
                    <input
                        className={style.PluginEditorHome_search}
                        placeholder="搜索类型名称..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyUp={(e) => handleKeyup(e)}
                    />
                    <div className={style.pluginEditorHome_icon} onClick={handleClickSearch}>
                        <Icon type="search" />
                    </div>
                </div>
            </div>
            <div className={style.pluginEditorHome_main}>
                <div className={style.pluginEditorHome_title}>插件主题风格</div>
                <div className={style.pluginEditorHome_styleSelection}>
                    {selectStyleList.map((item) => {
                        return (
                            <div
                                className={getClassNames({
                                    [style.pluginEditorHome_selectionItem]: true,
                                    [style.pluginEditorHome_selectionItem_active]: item.status,
                                })}
                                key={item.id}
                                onClick={() => handleSelectstyle(item.id)}
                            >
                                {item.content}
                            </div>
                        );
                    })}
                </div>
                <div className={style.pluginEditorHome_list}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
export default PluginEditorHome;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
