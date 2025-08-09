import React from "react";
import {Routes, Route} from "react-router-dom";
import {Home,Contacto} from "../pages/web";

export function WebRouter(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contacto/" element={<Contacto/>}></Route>
            
        </Routes>
    );
}