import React  from 'react';

const Statistics = ({Good, Neutral, Bad, Total, Positive})=>{
    return(
        <>
    <ul className="statistic">
        <li>Good: {Good} </li>
        <li> Neutral: {Neutral} </li>
                <li>Bad: {Bad} </li>
            </ul>
        {(Total !== 0) ? 
        <>
            <p><b>Total feedbacks: {Total}</b></p>
                    <p>Positive feedbacks: <b>{Positive()}%</b></p>
                    <h3>Thank you for yours feedback! </h3>
        </> : "No feedback given"}
    </>
)};


export default Statistics;