import styles from './index.module.scss'

import {useTheme} from "app/providers/theme/useTheme";
import {classNames} from "shared/lib/classNames/classNames";

import {FC} from "react";

import DarkTheme from 'shared/assets/icons/theme-night.svg'
import LightTheme from 'shared/assets/icons/theme-sun.svg'

import {Theme} from "app/providers/theme/ThemeContext";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ThemeToggleProps {
    className?: string
}

export const ThemeToggle: FC<ThemeToggleProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            onClick={toggleTheme}
            className={classNames(styles.themeToggle, {}, [className])} theme={ButtonTheme.CLEAR}>
            {theme === Theme.DEFAULT ? <LightTheme/> : <DarkTheme/>}
        </Button>
    )
}
