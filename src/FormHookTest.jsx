import { useForm } from "react-hook-form";

const { register, handleSubmit, watch, formState: { errors } } = useForm()

const registerOptions = {
    name: {required: "Hey, we're gonna ned you to fill this out!"},
    amount: {
        required: "Hey, we're gonna need you to fill this out!",
        min: {
            value: 0,
            message: "We need a number bigger than 0!"
        }
    },
    volume: {
        required: "Hey, we're gonna ned you to fill this out!"
    },
    cost: {
        required: "Hey, we're gonna ned you to fill this out!"
    },
    percentage: {
        required: "Hey, we're gonna ned you to fill this out!"
    }
};

<div className="Form">
<form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-input-container">
        <label htmlFor="name" className="form-label">The boozes name?</label>
        <input type="text" id="name" className="form-input" name='name' 
        {...register('name', registerOptions.name)}/>
        <small className="danger">{errors?.name && errors.name.message}</small>
    </div>
    <div className="form-input-container">
        <label htmlFor="amount" className="form-label">How many?</label>
        <input type="number" id="amount" className="form-input" name='amount' 
        {...register('amount', registerOptions.amount)}/>
        <small className="danger">{errors?.amount && errors.amount.message}</small>
    </div>
    <div className="form-input-container">
        <label htmlFor="volume" className="form-label">What's the amount?</label>
        <input type="text" id="volume" className="form-input" name='volume' 
        {...register('volume', registerOptions.volume)} />
    <select id="unit" name="unit" 
    {...register('unit', registerOptions.unit)}>
        <option value="ml">ml</option>
        <option value="cl">cl</option>
        <option value="l">l</option>
    </select>
    </div>
    <div className="form-input-container">
        <label htmlFor="cost" className="form-label">How much does it cost?</label>
        <input type="text" id="cost" className="form-input" name='cost' 
        {...register('cost', registerOptions.cost)} />
        <small className="danger">{errors?.cost && errors.cost.message}</small>
    </div>
    <div className="form-input-container">
        <label htmlFor="percentage" className="form-label">What's the percentage</label>
        <input type="text" id="percentage" className="form-input" name='percentage' 
        {...register('percentage', registerOptions.percentage)} />
        <small className="danger">{errors?.percentage && errors.percentage.message}</small>
    </div>
    <div className="box-container"><button className="form-button" onClick={handleSubmit}>Submit</button>
        {isSubmitted && <button className="form-button" onClick={runCalculate}>Go</button>}</div>

</form>
</div>

{/* <div className="Form">
<form action="">
    <div className="form-input-container">
        <label htmlFor="name" className="form-label">The boozes name?</label>
        <input type="text" id="name" className="form-input" name='name' value={formData.name} onChange={handleChange}/>
    </div>
    <div className="form-input-container">
        <label htmlFor="amount" className="form-label">How many?</label>
        <input type="number" id="amount" className="form-input" name='amount' value={formData.amount} onChange={handleChange}/>
    </div>
    <div className="form-input-container">
        <label htmlFor="volume" className="form-label">What's the amount?</label>
        <input type="text" id="volume" className="form-input" name='volume' value={formData.volume} onChange={handleChange} />
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
</div> */}