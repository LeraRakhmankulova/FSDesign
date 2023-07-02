import React, {Suspense} from 'react';
import {Link, Routes,} from "react-router-dom";
import {Route} from "react-router";

import {useTheme} from "app/theme/useTheme";
import {classNames} from "shared/lib/classNames/classNames";

import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

import "./styles/index.scss"


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <button onClick={toggleTheme} className='test'>Toggle</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App