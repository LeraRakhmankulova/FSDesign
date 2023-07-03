import React, {Suspense} from "react";
import {Routes} from "react-router-dom";
import {Route} from "react-router";

import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
        </Suspense>
    )
}