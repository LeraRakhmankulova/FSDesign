import React, {Suspense} from 'react';
import {AppRouter} from "app/providers/routes";

import {useTheme} from "app/providers/theme/useTheme";
import {classNames} from "shared/lib/classNames/classNames";

import {Sidebar} from "widgets/Sidebar";
import {Navbar} from "widgets/Navbar";

import "./styles/index.scss"

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense>
                <Navbar/>
                <div className='content'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App