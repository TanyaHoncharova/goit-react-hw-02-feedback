import React  from 'react';

const Statistics = ({Good, Neutral, Bad, Total, Positive})=>{
    return(
        <div>
        <h2 className="title" >Statistics</h2>
    <ul className="statistic">
        <li>Good: {Good} </li>
        <li> Neutral: {Neutral} </li>
        <li>Bad: {Bad} </li>
        <li>Total: {Total()} </li>
        <li>Positive feedback: {Positive()} % </li>
    </ul>
    </div>

    )
}


export default Statistics;