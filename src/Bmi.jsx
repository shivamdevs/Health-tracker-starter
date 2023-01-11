import React, { useState } from 'react'

function Bmi() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmi, setbmi] = useState(0);
    const calculate = (e) => {
        e.preventDefault();
        setbmi(parseFloat((weight / ((height * height) / 10000)).toFixed(2)));
    };
    return (
        <div className="base">
            <h2>Body Mass Index</h2>
            <div className="row">
                <form action="" className="item form" onSubmit={calculate}>
                    <h3>Calculator</h3>
                    <div className="group">
                        <label htmlFor="weight" className="label">Weight <span className="data">(in Kg)</span></label>
                        <input type="number" id="weight" className='input' onChange={(e) => setWeight(e.target.value)} required autoComplete='off' autoFocus />
                    </div>
                    <div className="group">
                        <label htmlFor="height" className="label">Height <span className="data">(in cm)</span></label>
                        <input type="number" id="height" className='input' onChange={(e) => setHeight(e.target.value)} required autoComplete='off' />
                    </div>
                    <div className="group">
                        <button type="submit" className='submit'>Calculate</button>
                    </div>
                </form>
                <div className="item">
                    <h3>Result</h3>
                    <p>Height: <span className="data">{height || 0} cm</span></p>
                    <p>Weight: <span className="data">{weight || 0} Kg</span></p>
                    <p>BMI: <span className="data">{bmi || 0} Kg/m<sup>2</sup></span></p>
                    <p>Overview: <span className="data">{((bmi === 0) ? "Click on Calculate" : (bmi < 18.6) ? "Haste! You are Under Weight" : (bmi >= 18.6 && bmi < 24.9) ? "Hurray! You have Normal BMI" : "Control! You are Over Weight")}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Bmi;