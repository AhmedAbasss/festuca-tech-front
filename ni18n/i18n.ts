import UniversalCookie from 'universal-cookie';
import en from '../public/locales/en.json';
import ar from '../public/locales/ar.json';
import ku from '../public/locales/ku.json';
const cookieObj = typeof window === 'undefined' ?
    require('next/headers') :
    require('universal-cookie');

const langObj: any = { en, ar, ku };

const getLang = () => {
    let lang = null;
    if (typeof window !== 'undefined') {
        const cookies = new UniversalCookie();
        lang = cookies.get('i18nextLng');
    } else {
        const cookies = cookieObj.cookies();
        lang = cookies.get('i18nextLng')?.value;
    }

    return lang;
};

export const getTranslation = () => {
    const lang = getLang();
    const data: any = langObj[lang];
    const t = (key: string) => {
        return data && data[key] ? data[key] : key;
    };

    const initLocale = (themeLocale: string) => {
        const lang = getLang();
        i18n.changeLanguage(lang || themeLocale);
    };

    const i18n = {
        language: lang,
        changeLanguage: (lang: string) => {
            const cookies = new UniversalCookie();
            cookies.set('i18nextLng', lang, { path: '/' });
        },
    };

    return { t, i18n, initLocale };
};
