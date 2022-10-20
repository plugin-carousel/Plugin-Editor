/**
 * file: Multi Language setting file
 * date: 2020-07-21
 * author: Frank
 * lastModify: Frank 2020-07-21
 */
import { getLanguage } from '@datareachable/dr_front_componentlibrary';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationCn from './Translations/cn/translation.json';
import translationEn from './Translations/en/translation.json';

const resources = {
    en: {
        translation: translationEn,
    },
    cn: {
        translation: translationCn,
    },
};
void (async () => {
    const lang = await getLanguage();
    void i18n
        // pass the i18n instance to react-i18next.
        .use(initReactI18next)
        // init i18next
        // for all options read: https://www.i18next.com/overview/configuration-options
        .init({
            resources,
            lng: lang ?? 'en',
            interpolation: {
                escapeValue: false, // not needed for react!!
            },
        });
})();

export default i18n;
