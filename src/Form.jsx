import { useState, useEffect } from 'react';
import './Form.css'

export default function Form({ title, isSubmitted, renderForm }) {

const [dataArr, setDataArr] = useState([]);  // array to compare the drink objects when "go" button is clicked

const [abvArr, setAbvArr] = useState([]);   // array to insert the percentage to perform calculations

const [bestAbvObj, setBestAbvObj] = useState([null]); // react state in which to save drink with best abv

const [formData, setFormData] = useState({
    name: "",
    amount: "",
    unit:"ml",
    cost: "",
    percentage: "",

})

const [triggerProcess, setTriggerProcess] = useState(false);

useEffect(() => {
    if (triggerProcess) {
      processData();
      setTriggerProcess(false);
    }
  }, [dataArr, triggerProcess]);


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

    const drinkName = formData.name;
    //   TURNING EVERYTHING IN TO ML
    let drinkAmount;
    if (formData.unit === "cl") {
        drinkAmount = parseInt(formData.amount) * 10
    } else if (formData.unit === "l") {
        drinkAmount = parseInt(formData.amount) * 1000
    } else{drinkAmount = parseInt(formData.amount)}
    console.log(drinkAmount)

    //    SAVING THE COST
    let drinkCost = parseInt(formData.cost);
    let costML = drinkCost/drinkAmount;
    console.log(drinkCost, costML)

    //    SAVING THE PERCENTAGE
    let drinkPercentage = parseInt(formData.percentage);
    console.log(drinkPercentage);

    setAbvArr((currAbvArr => {
        return [...currAbvArr, drinkPercentage]
    }))
    console.log(abvArr)

    makeDataObj(drinkName, drinkAmount, costML, drinkPercentage);
    

  renderForm(e);
}

const makeDataObj =(drinkName, drinkAmount, costML, drinkPercentage) => {
    const dataOBJ = {
        name: drinkName,
        amount: drinkAmount,
        cost: costML,
        percentage: drinkPercentage
    }
    console.log(dataOBJ)
   setDataArr((oldDataArr) => [...oldDataArr, dataOBJ]);
   setFormData({
    name: "",
    amount: "",
    unit:"ml",
    cost: "",
    percentage: ""

})
   console.log(dataArr)
}

const runCalculate = (e) => {
    e.preventDefault();
    handleSubmit(e);
    setTriggerProcess(true); 
}

const processData = () => {
    const abvMax = Math.max(...abvArr);
    
    // Create a copy of dataArr with modifications
    const updatedData = dataArr.map(item => {
      const abvCost = (item.cost * abvMax) / item.percentage;
      return {
        ...item,
        abvCost: abvCost,
      };
    });
  
    // Update state using a callback function
    setDataArr(prevDataArr => [...updatedData]);

    findBestAbv();
  };

  const findBestAbv = () => {
    const bestAbv = dataArr.reduce((minObj, currentObj) => {
        return currentObj.abvCost < minObj.abvCost ? currentObj : minObj;
      });
      setBestAbvObj(bestAbv)
  }




  
  
  

    return (<>
    {bestAbv ? <Result 
         drink={bestAbv}/> : <div>
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
                    {isSubmitted && <button className="form-button" onClick={runCalculate}>Go</button>}</div>

            </form>
        </div>
        </div>
}
    </>
    )

}