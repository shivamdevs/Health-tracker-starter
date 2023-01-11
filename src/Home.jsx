import React from 'react';
import { AiOutlineFire } from 'react-icons/ai';
import { FaHeartbeat } from 'react-icons/fa';
import { BsGraphDown, BsGraphUp } from 'react-icons/bs';
import { GiBackPain, GiEgyptianWalk, GiLevelEndFlag, GiNightSleep } from 'react-icons/gi';

function Home() {
    return (
        <div className="base">
            <h2>Your Workout Routine</h2>
            <div className="row">
                <div className="item">
                    <h3><AiOutlineFire /> Calories</h3>
                    <p><BsGraphDown /> Lost: <span className="data">100 Cal</span></p>
                    <p><BsGraphUp /> Gained: <span className="data">60 Cal</span></p>
                </div>
                <div className="item">
                    <h3><GiEgyptianWalk /> Daily Steps</h3>
                    <p>Today: <span className="data">1000 steps | 750 m</span></p>
                    <p>Yesterday: <span className="data">2000 steps | 1.9 Km</span></p>
                    <p>Average: <span className="data">4000 steps | 3.8 Km</span></p>
                </div>
                <div className="item">
                    <h3>Highest Step Count</h3>
                    <p>5000 steps <span className="data">5.8 Km</span></p>
                </div>
            </div>
            <div className="row">
                <div className="item">
                    <h3><GiLevelEndFlag /> Measurement Levels</h3>
                    <p><FaHeartbeat /> Heart rate: <span className="data">70 bpm</span></p>
                    <p><GiBackPain /> Stress level: <span className="data">2.3 PSS</span></p>
                    <p><GiNightSleep /> Sleep duration: <span className="data">6 hrs</span></p>
                </div>
            </div>
        </div>
    );
};

export default Home;