/**
 * @file main domain
 * @date 2021-1-16
 * @author Jack
 * @lastModify  2021-1-16
 */
let mainDomain = '';
let userSystemProfileMainDomain = '';
let projectManagementDomain = '';
let dashboardDomain = '';
let loginBaseUrl = '';
let authBaseUrl = '';
let queryCenterService = '';
let openIDConnectService1 = '';
let profileServiceUrl = '';

switch (process.env.NODE_ENV) {
    // npm start 本地开发环境
    case 'development': {
        mainDomain = `https://api.dev.datareachable.net/mkt/v2/dev`;
        dashboardDomain = 'https://dashboard.dev.datareachable.net/';
        userSystemProfileMainDomain = `${mainDomain}/user/v2/dev`;
        projectManagementDomain = 'https://spm.dev.datareachable.net/';
        loginBaseUrl = 'https://api.dev.datareachable.net/common/oidc/v2';
        authBaseUrl = 'https://api.dev.datareachable.net/auth/common/v2';
        queryCenterService = '/query/centre/v2/dev';
        openIDConnectService1 = '/common/oidc/v2';
        profileServiceUrl = 'https://api.dev.datareachable.net/query/centre/v2/dev/profile';
        break;
    }
    // npm run buildV1 线上开发环境 (development test, 产品 QA)
    case 'v1_dev': {
        mainDomain = `https://api.dev.datareachable.net/mkt/v1/dev`;
        dashboardDomain = 'https://dashboard.dev.datareachable.net/';
        userSystemProfileMainDomain = 'https://profile.dev.datareachable.net/api/v2';
        projectManagementDomain = 'https://spm.dev.datareachable.net/';
        loginBaseUrl = 'https://api.dev.datareachable.net/common/oidc/v1';
        authBaseUrl = 'https://api.dev.datareachable.net/auth/common/v1';
        queryCenterService = '/query/centre/v2/dev';
        openIDConnectService1 = '/common/oidc/v1';
        profileServiceUrl = 'https://api.dev.datareachable.net/query/centre/v2/dev/profile';
        break;
    }
    // npm run buildV2 线上开发环境 (development test, 产品 QA)
    case 'v2_dev': {
        mainDomain = `https://api.dev.datareachable.net/mkt/v2/dev`;
        dashboardDomain = 'https://dashboard.dev.datareachable.net/';
        userSystemProfileMainDomain = `${mainDomain}/user/v2/dev`;
        projectManagementDomain = 'https://spm.dev.datareachable.net/';
        loginBaseUrl = 'https://api.dev.datareachable.net/common/oidc/v2';
        authBaseUrl = 'https://api.dev.datareachable.net/auth/common/v2';
        queryCenterService = '/query/centre/v2/dev';
        openIDConnectService1 = '/common/oidc/v2';
        profileServiceUrl = 'https://api.dev.datareachable.net/query/centre/v2/dev/profile';
        break;
    }
    // npm run testV2 测试环境, 开发稳定版
    case 'v2_test': {
        mainDomain = `https://api.dev.datareachable.net/mkt/v2/test`;
        dashboardDomain = 'https://dashboard.dev.datareachable.net/';
        userSystemProfileMainDomain = `${mainDomain}/user/v2/test`;
        projectManagementDomain = 'https://spm.dev.datareachable.net/';
        loginBaseUrl = 'https://api.dev.datareachable.net/common/oidc/v2/test';
        authBaseUrl = 'https://api.dev.datareachable.net/auth/common/v2/test';
        queryCenterService = '/query/centre/v2/test';
        openIDConnectService1 = '/common/oidc/v2/test';
        profileServiceUrl = 'https://api.dev.datareachable.net/query/centre/v2/dev/profile';
        break;
    }
    // 线上生产环境, 正式版本
    case 'production': {
        mainDomain = `https://api.dev.datareachable.net/mkt`;
        dashboardDomain = 'https://dashboard.dev.datareachable.net/';
        userSystemProfileMainDomain = `${mainDomain}/user/v2/dev`;
        projectManagementDomain = 'https://spm.dev.datareachable.net/';
        loginBaseUrl = 'https://api.dev.datareachable.net/common/oidc/v1';
        authBaseUrl = 'https://api.dev.datareachable.net/auth/common/v1';
        queryCenterService = '/query/centre/v2/dev';
        openIDConnectService1 = '/common/oidc/v2';
        profileServiceUrl = 'https://api.dev.datareachable.net/query/centre/v2/dev/profile';
        break;
    }
    // 其他环境
    default: {
        mainDomain = `https://api.dev.datareachable.net/mkt`;
        dashboardDomain = 'https://dashboard.dev.datareachable.net/';
        userSystemProfileMainDomain = `${mainDomain}/user/v2/dev`;
        projectManagementDomain = 'https://spm.dev.datareachable.net/';
        loginBaseUrl = 'https://api.dev.datareachable.net/common/oidc/v2';
        authBaseUrl = 'https://api.dev.datareachable.net/auth/common/v2';
        queryCenterService = '/query/centre/v2/dev';
        openIDConnectService1 = '/common/oidc/v2';
        profileServiceUrl = 'https://api.dev.datareachable.net/query/centre/v2/dev/profile';
        break;
    }
}

export {
    userSystemProfileMainDomain,
    projectManagementDomain,
    dashboardDomain,
    loginBaseUrl,
    authBaseUrl,
    queryCenterService,
    openIDConnectService1,
    profileServiceUrl,
};

export default mainDomain;
