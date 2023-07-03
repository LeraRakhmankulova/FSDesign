import React from 'react';
import {Link} from "react-router-dom";
import {AppRouter} from "app/providers/routes";

import {useTheme} from "app/providers/theme/useTheme";
import {classNames} from "shared/lib/classNames/classNames";

import "./styles/index.scss"

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <button onClick={toggleTheme} className='test'>Toggle</button>
            <AppRouter/>
        </div>
    )
}

export default App