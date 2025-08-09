import React from 'react';
import {Route, Routes } from "react-router-dom"

import {Auth} from "../pages/admin";

export function Adminrouter() {
    return (
        <Routes>
             <Route path="/admin/" element={<Auth/>}></Route>
        </Routes>
    );
}

