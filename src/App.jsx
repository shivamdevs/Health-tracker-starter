import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bmi from "./Bmi";

import './App.css';

function App() {
    return (
        <div className="app">
            <header>Health Tracker</header>
            <div className="flex">
                <div className="sidebar">
                    <NavLink to="/" className="side-btn">Daily Tracker</NavLink>
                    <NavLink to="/bmi" className="side-btn">Calculate BMI</NavLink>
                </div>
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/bmi" element={<Bmi />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default App;