// import { useState, useEffect } from 'react';
// import { useForm } from "react-hook-form";
// import './Form.css'
// import Result from './Result';

// import { useFormContext } from './hooks/useFormContext';

// export default function Form({ title, renderForm }) {

// const {isSubmitted, changeSubmitted} = useFormContext()

// const [dataArr, setDataArr] = useState([]);  // array to compare the drink objects when "go" button is clicked
// const [bestAbvObj, setBestAbvObj] = useState(null); // react state in which to save drink with best abv

// const { register, handleSubmit, watch, formState: { errors } } = useForm();
// const registerOptions = {
//     name: {required: "Hey, we're gonna ned you to fill this out!"},
//     amount: {
//         required: "Hey, we're gonna need you to fill this out!",
//         min: {
//             value: 0,
//             message: "We need a number bigger than 0!"
//         }
//     },
//     volume: {
//         required: "Hey, we're gonna ned you to fill this out!"
//     },
//     cost: {
//         required: "Hey, we're gonna ned you to fill this out!"
//     },
//     percentage: {
//         required: "Hey, we're gonna ned you to fill this out!"
//     }
// };


// // const [formData, setFormData] = useState({
// //     name: "",
// //     amount: 1,
// //     volume: "",
// //     unit:"ml",
// //     cost: "",
// //     percentage: "",

// // })

// const [triggerProcess, setTriggerProcess] = useState(false);

// // Boolean to trigger the processData button when "go" button is clicked. 
// //Set up like this so user doesn't have to click "submit" then "go" when they've finished inputing options
// useEffect(() => {
//     if (triggerProcess) {
//       processData();
//       setTriggerProcess(false);
//     }
//   }, [dataArr, triggerProcess]);


// const handleChange = (evt) => {
//     const changedField = evt.target.name;
//     const changedValue = evt.target.value;
//     setFormData((currData) => {
//         currData[changedField] = changedValue;
//         return {...currData}
//     })
// }

// const onSubmit =(e) => {
//     // e.preventDefault()
//     // console.log(formData)

//     const drinkName = e.name;
 
//     //   multiply the amount by the number before converting.
//     let totalVolume = parseInt(e.volume) * e.amount;
//     let parsedVolume;
//        //   TURNING EVERYTHING IN TO ML
//     if (e.unit === "cl") {
//         parsedVolume = totalVolume * 10
//     } else if (e.unit === "l") {
//         parsedVolume = totalVolume * 1000
//     } else{parsedVolume = totalVolume}
//     console.log(parsedVolume)

//     //    SAVING THE COST
//     let drinkCost = parseInt(e.cost);
//     let costML = drinkCost/parsedVolume;
//     console.log(drinkCost, costML)

//     //    SAVING THE PERCENTAGE
//     let drinkPercentage = parseInt(e.percentage);
//     console.log(drinkPercentage);


//     makeDataObj(drinkName, parsedVolume, costML, drinkPercentage);
// // const onSubmit =(e) => {
// //     // e.preventDefault()
// //     console.log(formData)

// //     const drinkName = formData.name;
 
// //     //   multiply the amount by the number before converting.
// //     let totalVolume = parseInt(formData.volume) * formData.amount;
// //     let parsedVolume;
// //        //   TURNING EVERYTHING IN TO ML
// //     if (formData.unit === "cl") {
// //         parsedVolume = totalVolume * 10
// //     } else if (formData.unit === "l") {
// //         parsedVolume = totalVolume * 1000
// //     } else{parsedVolume = totalVolume}
// //     console.log(parsedVolume)

// //     //    SAVING THE COST
// //     let drinkCost = parseInt(formData.cost);
// //     let costML = drinkCost/parsedVolume;
// //     console.log(drinkCost, costML)

// //     //    SAVING THE PERCENTAGE
// //     let drinkPercentage = parseInt(formData.percentage);
// //     console.log(drinkPercentage);


// //     makeDataObj(drinkName, parsedVolume, costML, drinkPercentage);
    
// //    renderForm(e);
// changeSubmitted(true)
// }

// const makeDataObj =(drinkName, parsedVolume, costML, drinkPercentage) => {
//     const dataOBJ = {
//         name: drinkName,
//         volume: parsedVolume,
//         cost: costML,
//         percentage: drinkPercentage
//     }
//     console.log(dataOBJ)
//    setDataArr((oldDataArr) => [...oldDataArr, dataOBJ]);
// //    setFormData({
// //     name: "",
// //     amount: 1,
// //     volume: "",
// //     unit:"ml",
// //     cost: "",
// //     percentage: "",

// // })
//    console.log(dataArr)
// }

// const runCalculate = (e) => {
//     e.preventDefault();
//     handleSubmit(e);
//     setTriggerProcess(true); 
// }

// const processData = () => {
//     // const abvMax = Math.max(...abvArr);
//     const abvMax = dataArr.reduce((maxItem, currentItem) => {
//         return currentItem.percentage > maxItem ? currentItem.percentage : maxItem;
//     }, dataArr[0].percentage)
//     console.log(abvMax)
//     // Create a copy of dataArr with modifications
//     const updatedData = dataArr.map(item => {
//       const abvCost = item.cost * (abvMax / item.percentage);
//       return {
//         ...item,
//         abvCost: abvCost,
//       };
//     });
  
//     // Update state using a callback function
//     // setDataArr(prevDataArr => [...updatedData]);
//     setDataArr(updatedData);
//     findBestAbv(updatedData)
    

//   };

//   const findBestAbv = (updatedData) => {
//     const minAbvCostObj = updatedData.reduce((minObj, currentObj) => {
//         return currentObj.abvCost < minObj.abvCost ? currentObj : minObj;
//       }); // Reduce, starts as first abvCost of object, checks if second is smaller. If it is it returns it, othherwise it returns the current.Used to find the smallest abv.
//     setBestAbvObj(minAbvCostObj);
//   }
  

//     return (<>
//     {bestAbvObj ? <Result 
//         drink={bestAbvObj}
//         setDrink={setBestAbvObj}
//         setDataArr={setDataArr}/> :
//     <div className="form-container">
//           <h1 className="title">Smartahol</h1>
//         <h2 className="form-title">{title}</h2>

//         <div className="Form">
// <form onSubmit={handleSubmit(onSubmit)}>
//     <div className="form-input-container">
//         <label htmlFor="name" className="form-label">The boozes name?</label>
//         <input type="text" id="name" className="form-input" name='name' 
//         {...register('name', registerOptions.name)}/>
//         <small className="danger">{errors?.name && errors.name.message}</small>
//     </div>
//     <div className="form-input-container">
//         <label htmlFor="amount" className="form-label">How many?</label>
//         <input type="number" id="amount" className="form-input" name='amount' 
//         {...register('amount', registerOptions.amount)}/>
//         <small className="danger">{errors?.amount && errors.amount.message}</small>
//     </div>
//     <div className="form-input-container">
//         <label htmlFor="volume" className="form-label">What's the amount?</label>
//         <input type="text" id="volume" className="form-input" name='volume' 
//         {...register('volume', registerOptions.volume)} />
//     <select id="unit" name="unit" 
//     {...register('unit', registerOptions.unit)}>
//         <option value="ml">ml</option>
//         <option value="cl">cl</option>
//         <option value="l">l</option>
//     </select>
//     </div>
//     <div className="form-input-container">
//         <label htmlFor="cost" className="form-label">How much does it cost?</label>
//         <input type="text" id="cost" className="form-input" name='cost' 
//         {...register('cost', registerOptions.cost)} />
//         <small className="danger">{errors?.cost && errors.cost.message}</small>
//     </div>
//     <div className="form-input-container">
//         <label htmlFor="percentage" className="form-label">What's the percentage</label>
//         <input type="text" id="percentage" className="form-input" name='percentage' 
//         {...register('percentage', registerOptions.percentage)} />
//         <small className="danger">{errors?.percentage && errors.percentage.message}</small>
//     </div>
//     <div className="box-container"><button className="form-button" onClick={handleSubmit}>Submit</button>
//         {isSubmitted && <button className="form-button" onClick={runCalculate}>Go</button>}</div>

// </form>
// </div>



//         {/* <div className="Form">
//             <form action="">
//                 <div className="form-input-container">
//                     <label htmlFor="name" className="form-label">The boozes name?</label>
//                     <input type="text" id="name" className="form-input" name='name' value={formData.name} onChange={handleChange}/>
//                 </div>
//                 <div className="form-input-container">
//                     <label htmlFor="amount" className="form-label">How many?</label>
//                     <input type="number" id="amount" className="form-input" name='amount' value={formData.amount} onChange={handleChange}/>
//                 </div>
//                 <div className="form-input-container">
//                     <label htmlFor="volume" className="form-label">What's the amount?</label>
//                     <input type="text" id="volume" className="form-input" name='volume' value={formData.volume} onChange={handleChange} />
//                 <select id="unit" name="unit" value={formData.unit} onChange={handleChange}>
//                     <option value="ml">ml</option>
//                     <option value="cl">cl</option>
//                     <option value="l">l</option>
//                 </select>
//                 </div>
//                 <div className="form-input-container">
//                     <label htmlFor="cost" className="form-label">How much does it cost?</label>
//                     <input type="text" id="cost" className="form-input" name='cost' value={formData.cost} onChange={handleChange} />
//                 </div>
//                 <div className="form-input-container">
//                     <label htmlFor="percentage" className="form-label">What's the percentage</label>
//                     <input type="text" id="percentage" className="form-input" name='percentage' value={formData.percentage} onChange={handleChange} />
//                 </div>
//                 <div className="form-input-container"></div>
//                 <div className="form-input-container"></div>
//                 <div className="box-container"><button className="form-button" onClick={handleSubmit}>Submit</button>
//                     {isSubmitted && <button className="form-button" onClick={runCalculate}>Go</button>}</div>

//             </form>
//         </div> */}
//         </div>
//     }

//     </>
//     )

// }

// import { useState, useEffect } from 'react';
// import { useForm } from "react-hook-form";
// import './Form.css'
// import Result from './Result';

// import { useFormContext } from './hooks/useFormContext';

// export default function Form({ title, renderForm }) {

// const {isSubmitted, changeSubmitted} = useFormContext()

// const [dataArr, setDataArr] = useState([]);  // array to compare the drink objects when "go" button is clicked
// const [bestAbvObj, setBestAbvObj] = useState(null); // react state in which to save drink with best abv

// const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
//     defaultValues: {
//         name: "",
//         amount: 1,
//         volume: "",
//         unit: "ml",
//         cost: "",
//         percentage: ""
//     }
// });
// const registerOptions = {
//     name: {required: "Hey, we're gonna need you to fill this out!"},
//     amount: {
//         required: "Hey, we're gonna need you to fill this out!",
//         min: {
//             value: 1,
//             message: "We need a number bigger than 0!"
//         }
//     },
//     volume: {
//         required: "Hey, we're gonna need you to fill this out!",
//         validate: (fieldValue) => !isNaN(parseInt(fieldValue)) || "Hey, we need a number here!"
//     },
//     cost: {
//         required: "Hey, we're gonna need you to fill this out!"
//     },
//     percentage: {
//         required: "Hey, we're gonna need you to fill this out!"
//     }
// };


// // const [formData, setFormData] = useState({
// //     name: "",
// //     amount: 1,
// //     volume: "",
// //     unit:"ml",
// //     cost: "",
// //     percentage: "",

// // })

// const [triggerProcess, setTriggerProcess] = useState(false);

// // Boolean to trigger the processData button when "go" button is clicked. 
// //Set up like this so user doesn't have to click "submit" then "go" when they've finished inputing options
// useEffect(() => {
//     if (triggerProcess) {
//       processData();
//       setTriggerProcess(false);
//     }
//   }, [dataArr, triggerProcess]);


// const handleChange = (evt) => {
//     const changedField = evt.target.name;
//     const changedValue = evt.target.value;
//     setFormData((currData) => {
//         currData[changedField] = changedValue;
//         return {...currData}
//     })
// }

// const onSubmit =(e) => {
//     // e.preventDefault()
//     // console.log(formData)

//     const drinkName = e.name;
 
//     //   multiply the amount by the number before converting.
//     let totalVolume = parseInt(e.volume) * e.amount;
//     let parsedVolume;
//        //   TURNING EVERYTHING IN TO ML
//     if (e.unit === "cl") {
//         parsedVolume = totalVolume * 10
//     } else if (e.unit === "l") {
//         parsedVolume = totalVolume * 1000
//     } else{parsedVolume = totalVolume}
//     console.log(parsedVolume)

//     //    SAVING THE COST
//     let drinkCost = parseInt(e.cost);
//     let costML = drinkCost/parsedVolume;
//     console.log(drinkCost, costML)

//     //    SAVING THE PERCENTAGE
//     let drinkPercentage = parseInt(e.percentage);
//     console.log(drinkPercentage);


//     makeDataObj(drinkName, parsedVolume, costML, drinkPercentage);
// // const onSubmit =(e) => {
// //     // e.preventDefault()
// //     console.log(formData)

// //     const drinkName = formData.name;
 
// //     //   multiply the amount by the number before converting.
// //     let totalVolume = parseInt(formData.volume) * formData.amount;
// //     let parsedVolume;
// //        //   TURNING EVERYTHING IN TO ML
// //     if (formData.unit === "cl") {
// //         parsedVolume = totalVolume * 10
// //     } else if (formData.unit === "l") {
// //         parsedVolume = totalVolume * 1000
// //     } else{parsedVolume = totalVolume}
// //     console.log(parsedVolume)

// //     //    SAVING THE COST
// //     let drinkCost = parseInt(formData.cost);
// //     let costML = drinkCost/parsedVolume;
// //     console.log(drinkCost, costML)

// //     //    SAVING THE PERCENTAGE
// //     let drinkPercentage = parseInt(formData.percentage);
// //     console.log(drinkPercentage);


// //     makeDataObj(drinkName, parsedVolume, costML, drinkPercentage);
    
// //    renderForm(e);
// changeSubmitted(true)
// }

// const makeDataObj =(drinkName, parsedVolume, costML, drinkPercentage) => {
//     const dataOBJ = {
//         name: drinkName,
//         volume: parsedVolume,
//         cost: costML,
//         percentage: drinkPercentage
//     }
//     console.log(dataOBJ)
//    setDataArr((oldDataArr) => [...oldDataArr, dataOBJ]);
//    reset();
// //    setFormData({
// //     name: "",
// //     amount: 1,
// //     volume: "",
// //     unit:"ml",
// //     cost: "",
// //     percentage: "",

// // })
//    console.log(dataArr)
// }

// const runCalculate = (e) => {
//     e.preventDefault();
//     handleSubmit(onSubmit)(e);
//     setTriggerProcess(true); 
// }

// const processData = () => {
//     // const abvMax = Math.max(...abvArr);
//     const abvMax = dataArr.reduce((maxItem, currentItem) => {
//         return currentItem.percentage > maxItem ? currentItem.percentage : maxItem;
//     }, dataArr[0].percentage)
//     console.log(abvMax)
//     // Create a copy of dataArr with modifications
//     const updatedData = dataArr.map(item => {
//       const abvCost = item.cost * (abvMax / item.percentage);
//       return {
//         ...item,
//         abvCost: abvCost,
//       };
//     });
  
//     // Update state using a callback function
//     // setDataArr(prevDataArr => [...updatedData]);
//     setDataArr(updatedData);
//     findBestAbv(updatedData)
    

//   };

//   const findBestAbv = (updatedData) => {
//     const minAbvCostObj = updatedData.reduce((minObj, currentObj) => {
//         return currentObj.abvCost < minObj.abvCost ? currentObj : minObj;
//       }); // Reduce, starts as first abvCost of object, checks if second is smaller. If it is it returns it, othherwise it returns the current.Used to find the smallest abv.
//     setBestAbvObj(minAbvCostObj);
//   }
  

//     return (<>
//     {bestAbvObj ? <Result 
//         drink={bestAbvObj}
//         setDrink={setBestAbvObj}
//         setDataArr={setDataArr}/> :
//     <div className="form-container">
//           <h1 className="title">Smartahol</h1>
//         <h2 className="form-title">{title}</h2>

//         <div className="Form">
// <form onSubmit={handleSubmit(onSubmit)}>
//     <div className="form-input-container">
//         <label htmlFor="name" className="form-label">The boozes name?</label>
//         <input type="text" id="name" className="form-input" name='name' 
//         {...register('name', registerOptions.name)}/>
//         <small className="form-error">{errors?.name && errors.name.message}</small>
//     </div>
//     <div className="form-input-container">
//         <label htmlFor="amount" className="form-label">How many?</label>
//         <input type="number" id="amount" className="form-input" name='amount' 
//         {...register('amount', registerOptions.amount)}/>
//         <small className="form-error">{errors?.amount && errors.amount.message}</small>
//     </div>
//     <div className="form-input-container">
//         <label htmlFor="volume" className="form-label">What's the amount?</label>
//         <input type="text" id="volume" className="form-input" name='volume' 
//         {...register('volume', registerOptions.volume)} />
//         <small className="form-error">{errors?.volume && errors.volume.message}</small>
//     <select id="unit" name="unit" 
//     {...register('unit', registerOptions.unit)}>
//         <option value="ml">ml</option>
//         <option value="cl">cl</option>
//         <option value="l">l</option>
//     </select>
//     </div>
//     <div className="form-input-container">
//         <label htmlFor="cost" className="form-label">How much does it cost?</label>
//         <input type="text" id="cost" className="form-input" name='cost' 
//         {...register('cost', registerOptions.cost)} />
//         <small className="form-error">{errors?.cost && errors.cost.message}</small>
//     </div>
//     <div className="form-input-container">
//         <label htmlFor="percentage" className="form-label">What's the percentage</label>
//         <input type="text" id="percentage" className="form-input" name='percentage' 
//         {...register('percentage', registerOptions.percentage)} />
//         <small className="form-error">{errors?.percentage && errors.percentage.message}</small>
//     </div>
//     <div className="box-container"><button className="form-button" onClick={handleSubmit}>Submit</button>
//         {isSubmitted && <button className="form-button" onClick={runCalculate}>Go</button>}</div>

// </form>
// </div>



//         {/* <div className="Form">
//             <form action="">
//                 <div className="form-input-container">
//                     <label htmlFor="name" className="form-label">The boozes name?</label>
//                     <input type="text" id="name" className="form-input" name='name' value={formData.name} onChange={handleChange}/>
//                 </div>
//                 <div className="form-input-container">
//                     <label htmlFor="amount" className="form-label">How many?</label>
//                     <input type="number" id="amount" className="form-input" name='amount' value={formData.amount} onChange={handleChange}/>
//                 </div>
//                 <div className="form-input-container">
//                     <label htmlFor="volume" className="form-label">What's the amount?</label>
//                     <input type="text" id="volume" className="form-input" name='volume' value={formData.volume} onChange={handleChange} />
//                 <select id="unit" name="unit" value={formData.unit} onChange={handleChange}>
//                     <option value="ml">ml</option>
//                     <option value="cl">cl</option>
//                     <option value="l">l</option>
//                 </select>
//                 </div>
//                 <div className="form-input-container">
//                     <label htmlFor="cost" className="form-label">How much does it cost?</label>
//                     <input type="text" id="cost" className="form-input" name='cost' value={formData.cost} onChange={handleChange} />
//                 </div>
//                 <div className="form-input-container">
//                     <label htmlFor="percentage" className="form-label">What's the percentage</label>
//                     <input type="text" id="percentage" className="form-input" name='percentage' value={formData.percentage} onChange={handleChange} />
//                 </div>
//                 <div className="form-input-container"></div>
//                 <div className="form-input-container"></div>
//                 <div className="box-container"><button className="form-button" onClick={handleSubmit}>Submit</button>
//                     {isSubmitted && <button className="form-button" onClick={runCalculate}>Go</button>}</div>

//             </form>
//         </div> */}
//         </div>
//     }

//     </>
//     )

// }