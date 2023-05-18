import './contactus.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Contactus() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thanks');
  }

  return (
    <>
   
    <div className="form-container ">
     <h2>Send a message to Us!</h2>
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        placeholder='Enter your name...'
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          placeholder='Enter your age...'
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
      <label>Enter your Email:
        <input 
        placeholder='Enter your email...'
          type="email" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
        <textarea placeholder='Type message here....' name="message" id="" cols="10" rows="4"></textarea>
   
    </form>
    <button className='form-btn' type='submit'>Send Message</button>
    </div>
    
    </>
  )
}

export default Contactus;