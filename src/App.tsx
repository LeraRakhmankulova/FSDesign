import React, {Suspense, useContext, useState} from 'react';

import {Link, Routes,} from "react-router-dom";
import {Route} from "react-router";

import {MainPageAsync} from "./pages/MainPage/MainPage.lazy";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.lazy";


import "./styles/index.scss"
import {useTheme} from "./theme/useTheme";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <button onClick={toggleTheme} className='test'>Toggle</button>
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