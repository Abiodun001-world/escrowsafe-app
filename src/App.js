import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import './App.css';

export default function App() {
    return(
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/signin" element={ <SignIn /> } />
                </Routes>
                
                
            </BrowserRouter>
        </div>
    )
}




