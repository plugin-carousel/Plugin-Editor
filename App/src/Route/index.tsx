/**
 * file: Project Router File
 * date: 2020-07-21
 * author: Frank
 * lastModify: Frank 2020-07-21
 */
import { LoadingV2, OIDCLogin } from '@datareachable/dr_front_componentlibrary';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* <------------------------------------ **** Lazy Loading all the pages START **** ------------------------------------ */
export const routeList = [
    {
        path: '/',
        element: React.lazy(() => import('../Pages/Entry')),
        children: [
            {
                path: '',
                element: React.lazy(
                    () => import(/* webpackChunkName: 'DashboardPage' */ '../Pages/Home'),
                ),
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
                <OIDCLogin
                    projectType="profile"
                    development_jwt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmRldi5kYXRhcmVhY2hhYmxlLm5ldCIsInN1YiI6IjAxRlhSTkdLU1IwNjVWNlpCQVRERFRaQUNUIiwibm9uY2UiOiI4akVyaTZTWWhlNExmcG9Ma0JhZ1RJYlp0TlAxanBnVyJ9.IvJqVhn1gs6QESJmVHWe4BrRdulBIvlscPxCenDYGZQ"
                >
                    <Routes>{mapRouteList(routeList)}</Routes>
                </OIDCLogin>
            </Router>
        </Suspense>
    );
};

export default RootRouter;
