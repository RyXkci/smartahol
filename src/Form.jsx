import { useState } from 'react';
import './Form.css'

export default function Form({ title, isSubmitted, renderForm }) {


    return (<>
        <h2 className="form-title">{title}</h2>
        <div className="Form">
            <form action="">
                <div className="form-input-container">
                    <label htmlFor="name" className="form-label">The boozes name?</label>
                    <input type="text" id="name" className="form-input" name="name" />
                </div>
                <div className="form-input-container">
                    <label htmlFor="amount" className="form-label">What's the amount?</label>
                    <input type="text" id="amount" className="form-input" name="amount" />
                </div>
                <div className="form-input-container">
                    <label htmlFor="cost" className="form-label">How much does it cost?</label>
                    <input type="text" id="cost" className="form-input" name="cost" />
                </div>
                <div className="form-input-container">
                    <label htmlFor="percentage" className="form-label">What's the percentage</label>
                    <input type="text" id="percentage" className="form-input" name="percentage" />
                </div>
                <div className="form-input-container"></div>
                <div className="form-input-container"></div>
                <div className="box-container"><button className="form-button" onClick={renderForm}>Submit</button>
                    {!isSubmitted && <button className="form-button">Go</button>}</div>

            </form>
        </div>
    </>
    )

}