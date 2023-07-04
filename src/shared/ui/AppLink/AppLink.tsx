import styles from './index.module.scss'

import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

import {classNames} from "shared/lib/classNames/classNames";

interface AppLinkProps extends LinkProps{
    className?: string
}

const AppLink:FC<AppLinkProps> = (props) => {
    const {className, to, children, ...otherProps} = props
    return (
        <Link to={to}
              className={classNames(styles.appLink, {}, [className])}
              {...otherProps}>
            {children}
        </Link>
    )
}

export default AppLink