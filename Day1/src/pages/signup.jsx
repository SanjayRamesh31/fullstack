// import "./Signup.css";

// function Signup() {
//   return (
//     <div className="container">
//       <form className="signup-form">
//         <h2>Sign Up</h2>

//         <label htmlFor="fullName">Full Name</label>
//         <input type="text" id="fullName" name="fullName" required />

//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" name="email" required />

//         <label htmlFor="password">Password</label>
//         <input type="password" id="password" name="password" required />

//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;

// import  { useState } from 'react';
// import '../assets/css/signup.css';

// const Signup = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};

    
//     if (!firstName) {
//       newErrors.firstName = 'First name is required';
//     }

    
//     if (!lastName) {
//       newErrors.lastName = 'Last name is required';
//     }

    
//     if (!email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Invalid email format';
//     }

    
//     if (!password) {
//       newErrors.password = 'Password is required';
//     }

    
//     if (!confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (password !== confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);

    
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Handle form submission logic here (e.g., API call, user registration)
//       console.log('Form submitted:', { firstName, lastName, email, password });
//     } else {
//       console.log('Form has validation errors');
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="box">
//           <label htmlFor="firstName" className="fl fontLabel">
//             First Name:
//           </label>
//           <div className="fr">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Enter your first name"
//               className="textBox"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//             {errors.firstName && <div className="error">{errors.firstName}</div>}
//           </div>
//           <div className="clr"></div>
//         </div>

//         <div className="box">
//           <label htmlFor="lastName" className="fl fontLabel">
//             Last Name:
//           </label>
//           <div className="fr">
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Enter your last name"
//               className="textBox"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//             {errors.lastName && <div className="error">{errors.lastName}</div>}
//           </div>
//           <div className="clr"></div>
//         </div>

//         <div className="box">
//           <label htmlFor="email" className="fl fontLabel">
//             Email:
//           </label>
//           <div className="fr">
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className="textBox"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && <div className="error">{errors.email}</div>}
//           </div>
//           <div className="clr"></div>
//         </div>

//         <div className="box">
//           <label htmlFor="password" className="fl fontLabel">
//             Password:
//           </label>
//           <div className="fr">
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               className="textBox"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <div className="error">{errors.password}</div>}
//           </div>
//           <div className="clr"></div>
//         </div>

//         <div className="box">
//           <label htmlFor="confirmPassword" className="fl fontLabel">
//             Confirm Password:
//           </label>
//           <div className="fr">
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm your password"
//               className="textBox"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
//           </div>
//           <div className="clr"></div>
//         </div>

//         <div className="box" style={{ background: '#2d3e3f' }}>
//           <input type="submit" className="submit" value="SIGN UP" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import { useState } from 'react';
import '../assets/css/signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (!lastName) {
      newErrors.lastName = 'Last name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission logic here (e.g., API call, user registration)
      console.log('Form submitted:', { firstName, lastName, email, password });
    } else {
      console.log('Form has validation errors');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>
      <div className="flex">
        <label>
          <input
            required=""
            placeholder="Enter your first name"
            type="text"
            className="input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* <span>Firstname</span> */}
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </label>

        <label>
          <input
            required=""
            placeholder="Enter your last name"
            type="text"
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {/* <span>Lastname</span> */}
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </label>
      </div>

      <label>
        <input
          required=""
          placeholder="Enter your email"
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <span>Email</span> */}
        {errors.email && <div className="error">{errors.email}</div>}
      </label>

      <label>
        <input
          required=""
          placeholder="Enter your password"
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <span>Password</span> */}
        {errors.password && <div className="error">{errors.password}</div>}
      </label>

      <label>
        <input
          required=""
          placeholder="Confirm your password"
          type="password"
          className="input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* <span>Confirm password</span> */}
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
      </label>

      <button type="submit" className="submit">Submit</button>
      <p className="signin">
        Already have an account? <Link to={'/login'}>Sign in</Link>
      </p>
    </form>
  );
};

export default Signup;
