import { useState } from 'react';
import './Result.css'


export default function Result({ drink, setDrink, isSubmitted, dataArr, setDataArr}) {
    console.log(isSubmitted)
    const reset = () => {
        console.log(isSubmitted)
        isSubmitted = false;
        setDrink(null)
        setDataArr([]);
    }
    return (<>
        <h1 className="title">
            Your best booze for your buck is: {drink.name}!
        </h1>
        <span className="title-aside">Want to know why?</span>
        <div className="result-paragraph">
            <p className="result-paragraph-text">It's because of the cost, {drink.abvCost}, Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Animi expedita nostrum vero beatae voluptate
                iure reiciendis non, sequi recusandae quisquam autem eaque id consectetur,
                tenetur libero! Cumque consectetur culpa sed.</p>
        </div>
        <button onClick={reset}>Reset</button>

    </>
    )


}