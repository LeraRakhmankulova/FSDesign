import styles from './index.module.scss'
import {FC, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import { LangToggle } from 'widgets/LangToggle';
import {ThemeToggle} from "widgets/ThemeToggle";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <LangToggle/>
            <div className={styles.toggle}>
                <ThemeToggle/>
            </div>
        </div>
    )
}
