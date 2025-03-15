import React from "react";
import { Router,Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Teams from "../Teams/Teams";
import Projects from "../Projects/Projects";

function Routing(){
    return (    
        <>
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/teams" element = {<Teams/>}/>
            <Route path="/projects" element = {<Projects/>}/>
        </Routes>
        </>
    )

}

export default Routing;