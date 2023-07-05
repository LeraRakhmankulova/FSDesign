import {useTranslation} from "react-i18next";
import {changeLanguage} from "i18next";

const MainPage = () => {
    const {t, i18n} = useTranslation();

    const toggleLng = () => {
        changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className='page'>
            {t('Главная страница')}
            <button onClick={toggleLng}>toggle language</button>
        </div>
    )
}

export default MainPage