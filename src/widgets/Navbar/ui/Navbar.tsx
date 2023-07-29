import { useTranslation } from 'react-i18next';
import styles from './index.module.scss'


import {classNames} from "shared/lib/classNames/classNames";

import AppLink from "shared/ui/AppLink/AppLink";
import {ThemeToggle} from "widgets/ThemeToggle";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to='/' className={styles.mainLink}>{t('Главная')}</AppLink>
                <AppLink to='/about' className={styles.aboutLink}>{t('О нас')}</AppLink>
            </div>
        </div>
    )
}
