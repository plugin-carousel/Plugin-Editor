/**
 * file: Project Router File
 * date: 2020-07-21
 * author: Frank
 * lastModify: Frank 2020-07-21
 */
import { LoadingV2 } from '@datareachable/dr_front_componentlibrary';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* <------------------------------------ **** Lazy Loading all the pages START **** ------------------------------------ */
export const routeList = [
    {
        path: '/',
        element: React.lazy(() => import('../Pages/Entry')),
        children: [
            {
                path: '/',
                element: React.lazy(
                    () => import(/* webpackChunkName: 'DashboardPage' */ '../Pages/PluginEditor'),
                ),
                children: [
                    {
                        path: '',
                        element: React.lazy(
                            () => import('../Pages/PluginEditor/Components/ChinaStyleBox'),
                        ),
                    },
                    {
                        path: '/gamestyle',
                        element: React.lazy(
                            () => import('../Pages/PluginEditor/Components/GameStyleBox'),
                        ),
                    },
                    {
                        path: '/tecstyle',
                        element: React.lazy(
                            () => import('../Pages/PluginEditor/Components/TecStyleBox'),
                        ),
                    },
                ],
            },
            {
                path: '/plugin-detail',
                element: React.lazy(() => import('../Pages/PluginEditorDetailPage')),
            },
        ],
    },
    {
        path: '*',
        element: React.lazy(() => import('../Pages/NoMatchPage')),
    },
];
/* <------------------------------------ **** Lazy Loading all the pages END **** ------------------------------------ */

const RootRouter = (): JSX.Element => {
    const mapRouteList = (data?: typeof routeList) => {
        return data?.map((item, n) => {
            const CRoute = item.element;
            const El = <CRoute />;
            return (
                <Route key={`${n}_route`} path={item.path} element={El}>
                    {mapRouteList(item.children)}
                </Route>
            );
        });
    };

    return (
        <Suspense fallback={<LoadingV2 />}>
            <Router basename={process.env.BASENAME}>
                <Routes>{mapRouteList(routeList)}</Routes>
            </Router>
        </Suspense>
    );
};

export default RootRouter;
