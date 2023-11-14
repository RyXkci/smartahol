import { useState } from 'react';
import './Form.css'

export default function Form({ title, isSubmitted, renderForm }) {
const [formData, setFormData] = useState({
    name: "",
    amount: "",
    unit:"ml",
    cost: "",
    percentage: "",

})

const handleChange = (evt) => {
    const changedField = evt.target.name;
    const changedValue = evt.target.value;
    setFormData((currData) => {
        currData[changedField] = changedValue;
        return {...currData}
    })
}


const handleSubmit =(e) => {
    e.preventDefault()
    console.log(formData)
}

    // const [drinkName, setDrinkName] = useState('');

    return (<>
        <h2 className="form-title">{title}</h2>
        <div className="Form">
            <form action="">
                <div className="form-input-container">
                    <label htmlFor="name" className="form-label">The boozes name?</label>
                    <input type="text" id="name" className="form-input" name='name' value={formData.name} onChange={handleChange}/>
                </div>
                <div className="form-input-container">
                    <label htmlFor="amount" className="form-label">What's the amount?</label>
                    <input type="text" id="amount" className="form-input" name='amount' value={formData.amount} onChange={handleChange} />
                <select id="unit" name="unit" value={formData.unit} onChange={handleChange}>
                    <option value="ml">ml</option>
                    <option value="cl">cl</option>
                    <option value="l">l</option>
                </select>
                </div>
                <div className="form-input-container">
                    <label htmlFor="cost" className="form-label">How much does it cost?</label>
                    <input type="text" id="cost" className="form-input" name='cost' value={formData.cost} onChange={handleChange} />
                </div>
                <div className="form-input-container">
                    <label htmlFor="percentage" className="form-label">What's the percentage</label>
                    <input type="text" id="percentage" className="form-input" name='percentage' value={formData.percentage} onChange={handleChange} />
                </div>
                <div className="form-input-container"></div>
                <div className="form-input-container"></div>
                <div className="box-container"><button className="form-button" onClick={handleSubmit}>Submit</button>
                    {isSubmitted && <button className="form-button">Go</button>}</div>

            </form>
        </div>
    </>
    )

}