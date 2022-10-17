/**
 * @file redirect domain
 * @date 2021-1-16
 * @author Jack
 * @lastModify  2021-1-16
 */

import { getJwtKey } from '@datareachable/dr_front_componentlibrary';
import mainDomain, { openIDConnectService1 } from './mainDomain';

let redirectToSignInPage = '';
let redirectToSignOutPage = '';
let redirectToCompanyWebsite = ''; // redirect to company website
let redirectToDashboardPage = ''; // redirect to dashboard page
let redirectToSignUpPage = ''; // redirect to sign up page
let redirectToLandingPage = '';
let redirectToProfilePage = '';
let redirectToMarketPage = '';
let redirectToQEditor = '';
let redirectToSurveyPM = '';
let redirectToAnalysis = '';
let redirectToDist = '';
let redirectToPlugins = '';
let redirectToCommunity = '';
let appParams = '';
let basename = process.env.BASENAME || '';
const jwtKey = getJwtKey();
const appName = 'dashboard';

switch (process.env.NODE_ENV) {
    // npm start 本地开发环境
    case 'development': {
        basename = '/v2/dev';
        appParams = `app=${appName}-v2-dev`;
        redirectToSignInPage = `${mainDomain}${openIDConnectService1}/entry?${appParams}`;
        redirectToSignOutPage = `${mainDomain}${openIDConnectService1}/logout?${appParams}`;
        redirectToCompanyWebsite = `https://www.datareachable.com`;
        redirectToDashboardPage = `https://dashboard.dev.datareachable.net${basename}`;
        redirectToSignUpPage = `https://signup.dev.datareachable.net${basename}`;
        redirectToLandingPage = `https://landing.dev.datareachable.net${basename}`;
        redirectToProfilePage = `https://profile.dev.datareachable.net${basename}`;
        redirectToMarketPage = `https://market.dev.datareachable.net${basename}`;
        redirectToQEditor = `https://qdashboard.dev.datareachable.net${basename}`;
        redirectToSurveyPM = `https://spm.dev.datareachable.net${basename}`;
        redirectToAnalysis = `https://anlys.dev.datareachable.net${basename}`;
        redirectToDist = `https://dist.dev.datareachable.net${basename}`;
        redirectToPlugins = 'https://plugin-system.dev.datareachable.net/v2-dev/main';
        redirectToCommunity = `https://cmty.dev.datareachable.net${basename}`;
        break;
    }
    // npm run buildV1 生产测试环境 (development test)
    case 'v1_dev': {
        appParams = `app=${appName}-v1-dev`;
        redirectToSignInPage = `${mainDomain}${openIDConnectService1}/entry?${appParams}`;
        redirectToSignOutPage = `${mainDomain}${openIDConnectService1}/logout?${appParams}`;
        redirectToCompanyWebsite = `https://www.datareachable.com`;
        redirectToDashboardPage = `https://dashboard.dev.datareachable.net${basename}`;
        redirectToSignUpPage = `https://signup.dev.datareachable.net${basename}`;
        redirectToLandingPage = `https://landing.dev.datareachable.net${basename}`;
        redirectToProfilePage = `https://profile.dev.datareachable.net${basename}`;
        redirectToMarketPage = `https://market.dev.datareachable.net${basename}`;
        redirectToQEditor = `https://qdashboard.dev.datareachable.net${basename}`;
        redirectToSurveyPM = `https://spm.dev.datareachable.net${basename}`;
        redirectToAnalysis = `https://anlys.dev.datareachable.net${basename}`;
        redirectToDist = `https://dist.dev.datareachable.net${basename}`;
        redirectToPlugins = 'https://plugin-system.dev.datareachable.net';
        redirectToCommunity = `https://cmty.dev.datareachable.net${basename}`;
        break;
    }
    // npm run buildV2 生产测试环境 (development test)
    case 'v2_dev': {
        appParams = `app=${appName}-v2-dev`;
        redirectToSignInPage = `${mainDomain}${openIDConnectService1}/entry?${appParams}`;
        redirectToSignOutPage = `${mainDomain}${openIDConnectService1}/logout?${appParams}`;
        redirectToCompanyWebsite = `https://www.datareachable.com`;
        redirectToDashboardPage = `https://dashboard.dev.datareachable.net${basename}`;
        redirectToSignUpPage = `https://signup.dev.datareachable.net${basename}`;
        redirectToLandingPage = `https://landing.dev.datareachable.net${basename}`;
        redirectToProfilePage = `https://profile.dev.datareachable.net${basename}`;
        redirectToMarketPage = `https://market.dev.datareachable.net${basename}`;
        redirectToQEditor = `https://qdashboard.dev.datareachable.net${basename}`;
        redirectToSurveyPM = `https://spm.dev.datareachable.net${basename}`;
        redirectToAnalysis = `https://anlys.dev.datareachable.net${basename}`;
        redirectToDist = `https://dist.dev.datareachable.net${basename}`;
        redirectToPlugins = 'https://plugin-system.dev.datareachable.net/v2-dev/main';
        redirectToCommunity = `https://cmty.dev.datareachable.net${basename}`;
        break;
    }
    // npm run testV2 测试环境, 线上稳定版
    case 'v2_test': {
        appParams = `app=${appName}-v2-test`;
        redirectToSignInPage = `${mainDomain}${openIDConnectService1}/entry?${appParams}`;
        redirectToSignOutPage = `${mainDomain}${openIDConnectService1}/logout?${appParams}`;
        redirectToCompanyWebsite = `https://www.datareachable.com`;
        redirectToDashboardPage = `https://dashboard.dev.datareachable.net${basename}`;
        redirectToSignUpPage = `https://signup.dev.datareachable.net${basename}`;
        redirectToLandingPage = `https://landing.dev.datareachable.net${basename}`;
        redirectToProfilePage = `https://profile.dev.datareachable.net${basename}`;
        redirectToMarketPage = `https://market.dev.datareachable.net${basename}`;
        redirectToQEditor = `https://qdashboard.dev.datareachable.net${basename}`;
        redirectToSurveyPM = `https://spm.dev.datareachable.net${basename}`;
        redirectToAnalysis = `https://anlys.dev.datareachable.net${basename}`;
        redirectToDist = `https://dist.dev.datareachable.net${basename}`;
        redirectToPlugins = 'https://plugin-system.dev.datareachable.net/v2-test/main';
        redirectToCommunity = `https://cmty.dev.datareachable.net${basename}`;
        break;
    }
    // 线上生产环境, 正式版本
    case 'production': {
        appParams = `app=${appName}-v2-dev`;
        redirectToSignInPage = `${mainDomain}${openIDConnectService1}/entry?${appParams}`;
        redirectToSignOutPage = `${mainDomain}${openIDConnectService1}/logout?${appParams}`;
        redirectToCompanyWebsite = `https://www.datareachable.com`;
        redirectToDashboardPage = `https://dashboard.dev.datareachable.net${basename}`;
        redirectToSignUpPage = `https://signup.dev.datareachable.net${basename}`;
        redirectToLandingPage = `https://landing.dev.datareachable.net${basename}`;
        redirectToProfilePage = `https://profile.dev.datareachable.net${basename}`;
        redirectToMarketPage = `https://market.dev.datareachable.net${basename}`;
        redirectToQEditor = `https://qdashboard.dev.datareachable.net${basename}`;
        redirectToSurveyPM = `https://spm.dev.datareachable.net${basename}`;
        redirectToAnalysis = `https://anlys.dev.datareachable.net${basename}`;
        redirectToDist = `https://dist.dev.datareachable.net${basename}`;
        redirectToPlugins = 'https://plugin-system.dev.datareachable.net';
        redirectToCommunity = `https://cmty.dev.datareachable.net${basename}`;
        break;
    }
    // 其他环境
    default: {
        appParams = `app=${appName}-v2-dev`;
        redirectToSignInPage = `${mainDomain}${openIDConnectService1}/entry?${appParams}`;
        redirectToSignOutPage = `${mainDomain}${openIDConnectService1}/logout?${appParams}`;
        redirectToCompanyWebsite = `https://www.datareachable.com`;
        redirectToDashboardPage = `https://dashboard.dev.datareachable.net${basename}`;
        redirectToSignUpPage = `https://signup.dev.datareachable.net${basename}`;
        redirectToLandingPage = `https://landing.dev.datareachable.net${basename}`;
        redirectToProfilePage = `https://profile.dev.datareachable.net${basename}`;
        redirectToMarketPage = `https://market.dev.datareachable.net${basename}`;
        redirectToQEditor = `https://qdashboard.dev.datareachable.net${basename}`;
        redirectToSurveyPM = `https://spm.dev.datareachable.net${basename}`;
        redirectToAnalysis = `https://anlys.dev.datareachable.net${basename}`;
        redirectToDist = `https://dist.dev.datareachable.net${basename}`;
        redirectToPlugins = 'https://plugin-system.dev.datareachable.net';
        redirectToCommunity = `https://cmty.dev.datareachable.net${basename}`;
        break;
    }
}
export {
    basename,
    appParams,
    redirectToSignInPage,
    redirectToSignOutPage,
    redirectToCompanyWebsite,
    redirectToDashboardPage,
    redirectToSignUpPage,
    redirectToLandingPage,
    redirectToProfilePage,
    redirectToMarketPage,
    redirectToQEditor,
    redirectToSurveyPM,
    redirectToAnalysis,
    redirectToDist,
    redirectToPlugins,
    redirectToCommunity,
    jwtKey,
};
