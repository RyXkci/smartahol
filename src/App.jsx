import { useState } from 'react';
import './App.css';

import Form from './Form';

import { useFormContext } from './hooks/useFormContext';

function App() {

  // let [isSubmitted, setIsSubmitted] = useState(false);
  const {isSubmitted} = useFormContext()
  console.log(isSubmitted)
  const titleOne = "Enter all your boozey details, and we'll give you your best booze for your buck!"
  const titleTwo = "Enter another option or more. When you're ready, hit go!";
  let title = isSubmitted ? titleTwo : titleOne;

  const renderForm = (e) => {
    e.preventDefault();
    console.log('Working');
    // setIsSubmitted(true);
    console.log(isSubmitted);
  }

  return (
    <div className="main">
      <div className="main-container">
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
