import { useState } from 'react';
import { Link } from 'react-router-dom';
import"../assets/css/signup.css"
import { useNavigate } from "react-router-dom";


const Signup = () => {

  const navigate = useNavigate();

  const handleChangepo = () => {
    navigate('/login');
  };


  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'USER', // Assuming default role is 'USER'
    phoneNumber: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!user.name) {
      newErrors.name = 'Name is required';
    }

    if (!user.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!user.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:8181/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        if (!response.ok) {
          throw new Error('Failed to register');
        }

        const data = await response.json();
        const token = data.token;

        // Store token in local storage
        localStorage.setItem('token', token);

        // Optionally, you can also redirect the user to another page
        // history.push('/dashboard');

        console.log('Registration successful!');
        handleChangepo();
      } catch (error) {
        setErrorMessage(error.message);
      }
    } else {
      console.log('Form has validation errors');
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
  
  <div className='signup__react'>
  <div className='signup__reg'>

  
    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </label>

      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
        />
      </label>

      <label>
        Address:
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className="submit">Submit</button>
      <p className="signin">
        Already have an account? <Link to={'/login'}>Sign in</Link>
      </p>
    </form>
    </div>
    </div>
    
  );
};

export default Signup;
