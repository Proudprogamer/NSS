import React from "react";
import { Router,Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

function Routing(){
    return (
        <>
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/projects" element = {<Projects/>}/>
        </Routes>
        </>
    )

}

export default Routing;