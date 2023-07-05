import React from 'react';
import {AppRouter} from "app/providers/routes";

import {useTheme} from "app/providers/theme/useTheme";
import {classNames} from "shared/lib/classNames/classNames";

import {Navbar} from "widgets/Navbar";

import "./styles/index.scss"

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    )
}

export default App