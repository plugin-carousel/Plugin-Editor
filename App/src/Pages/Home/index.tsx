/**
 * @file home界面
 * @date 2022-10-10
 * @author xuejie.he
 * @lastModify xuejie.he 2022-10-10
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { useCallback, useEffect, useInsertionEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/Store/rootStore';
import { getIndustryList } from '~/Store/TaskHall/actions';
/*<--------------------------------- **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const HomePage = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [count, setCount] = useState(0);
    const ref = useRef(0);

    const dispatch = useDispatch();

    const { data: publicIndustry, loading } = useSelector((state: RootState) => {
        return state.taskHall.publicIndustry;
    });

    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    useInsertionEffect(() => {
        ref.current = count;
    }, [count]);

    useEffect(() => {
        dispatch(getIndustryList());
    }, [dispatch]);

    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const ignoreWarn = useCallback(() => {
        return count;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const refFn = useCallback(() => {
        return ref.current;
    }, []);

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div>
            我是home界面,切记ref和state的区别,好好利用
            <button
                onClick={() => {
                    setCount((pre) => ++pre);
                }}
            >
                加加
            </button>
            <div>count:{count}</div>
            <br />
            <div>useCallback的return结果(忽略警告版):{ignoreWarn()}</div>
            <br />
            <div>useCallback的return结果(ref版):{refFn()}</div>
            <br />
            <br />
            <h1> useSelector监听的数据: publicIndustry</h1>
            {loading ? (
                '加载中···'
            ) : (
                <ul>
                    {publicIndustry?.map((item) => {
                        return <li key={item.id}>{item.name}</li>;
                    })}
                </ul>
            )}
        </div>
    );
};
export default HomePage;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
