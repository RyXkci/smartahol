import { useState } from 'react';
import './App.css';

import Form from './Form';

function App() {

  let [isSubmitted, setIsSubmitted] = useState(true);
  console.log(isSubmitted)
  const titleOne = "Enter all your boozey details, and we'll give you your best booze for your buck!"
  const titleTwo = "Enter another option or more. When you're ready, hit go!";
  let title = isSubmitted ? titleOne : titleTwo;

  const renderForm = (e) => {
    e.preventDefault();
    console.log('Working');
    setIsSubmitted(false);
    console.log(isSubmitted);
  }

  return (
    <div className="main">
      <div className="form-container">
        <h1 className="title">Smartahol</h1>
        <Form
          title={title}
          renderForm={renderForm}
          isSubmitted={isSubmitted}
        />
      </div>
    </div>
  )
}

export default App
