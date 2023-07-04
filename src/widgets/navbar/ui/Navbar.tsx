import styles from './index.module.scss'

import React from "react";

import {classNames} from "shared/lib/classNames/classNames";

import AppLink from "shared/ui/AppLink/AppLink";
import {ThemeToggle} from "widgets/ThemeToggle";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <ThemeToggle/>
            <div className={styles.links}>
                <AppLink to='/' className={styles.mainLink}>Main</AppLink>
                <AppLink to='/about' className={styles.aboutLink}>About</AppLink>
            </div>
        </div>
    )
}
