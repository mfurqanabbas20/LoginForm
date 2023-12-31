import './App.css';
import React from 'react';
import Trees from './Assets/trees.png'
function App() {

  const[login, setLogin] = React.useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    console.log(event);
    setLogin(prevState => {
      return {
        ...prevState,
      [event.target.name]: event.target.value
      }
      
    }
      )

  }
  function getSubmitted() {
    console.log(login)
  }


  return (
    <div className='login-main'>
    <div className='login-content'>
       <h2>Welcome Back</h2>
       <p>Enter your credentials to access your account</p>
    <div className='login-inputs'>
      <label>Email Address</label>
      <input 
      name="email" 
      type='text' 
      placeholder='Email address'
      onChange={handleChange}
      /> 
      <label>Password</label>
      <input 
      name="password" 
      type='password' 
      placeholder='Password'
      onChange={handleChange}
      />
      <button onClick={getSubmitted} className='btn'>Login</button> 
    </div>   

      </div>
     <div className='login-image'>
      <img src={Trees} alt="Tree"/>
    </div>
    </div>
  );
}

export default App;
