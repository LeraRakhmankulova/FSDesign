import React, {Suspense} from 'react';

import {Link, Routes,} from "react-router-dom";
import {Route} from "react-router";

import {MainPageAsync} from "./pages/MainPage/MainPage.lazy";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.lazy";

const App = () => {
    return (
        <>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync/>}/>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </>
    )
}

export default App