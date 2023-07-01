import React, {Suspense, useState} from 'react';

import {Link, Routes,} from "react-router-dom";
import {Route} from "react-router";

import {MainPageAsync} from "./pages/MainPage/MainPage.lazy";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.lazy";


export enum Theme {
    DEFAULT = 'default',
    DARK = 'dark'
}

const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.DEFAULT)

    const toggleTheme = () => {
        setTheme(theme === Theme.DEFAULT ? Theme.DARK : Theme.DEFAULT)
    }

    return (
        <div className={`app ${theme}`}>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <button onClick={toggleTheme}>Toggle</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync/>}/>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App