import i18n, {InitOptions} from "i18next";
import Backend from 'i18next-http-backend';

import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

interface Options {
    fallbackLng: string,
    debug: boolean
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init<Options>({
        fallbackLng: 'en',
        debug: IS_DEV,
    });


export default i18n;