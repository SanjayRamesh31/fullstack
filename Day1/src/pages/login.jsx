// import { useForm } from "react-hook-form";
// import { Link, Navigate } from "react-router-dom";
// import { Button } from "@mui/material";
// import '../assets/css/login.css';
// // import logo from "../assets/images/farm.jpg"

// function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     console.log("Form data submitted:", data);

//     await new Promise(resolve => setTimeout(resolve, 1000));

//     console.log("Simulated asynchronous operation complete");
//   };
// const handleChangeLogin=()=>{
//   Navigate('/');
// }
//   return (
//     <div className="box">
//       {/* <img src= {logo} alt="Logo" className="logo" /> */}
//       <form className="App" onSubmit={handleSubmit(onSubmit)}>
//          <p className="p">Login Form</p>

//         <label>Username</label>
//         <input type="text" {...register("name", { required: true })} />
//         {errors.name && <span className="error">*Name* is mandatory</span>}

//         <label>Email</label>
//         <input type="email" {...register("email", { required: true })} />
//         {errors.email && <span className="error">*Email* is mandatory</span>}

//         <label>Password</label>
//         <input type="password" {...register("password", { required: true })} />
//         {errors.password && <span className="error">*Password* Required</span>}

//         <button type="submit" onClick={handleChangeLogin}>Submit</button> 
//        <Button><Link to="/signup">New User? Sign Up</Link></Button> 

//       </form>
//     </div>
//   );
// }

// export default Login;



import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import '../assets/css/login.css';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Form data submitted:", data);

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Simulated asynchronous operation complete");
    navigate('/');  // Use useHistory to navigate

  };

  return (
    <div className="box">
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
         <p className="p">Login Form</p>

        <label>Username</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <span className="error">*Name* is mandatory</span>}

        <label>Email</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span className="error">*Email* is mandatory</span>}

        <label>Password</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span className="error">*Password* Required</span>}

        <button type="submit">Submit</button> 
        <Button><Link to="/signup">New User? Sign Up</Link></Button> 
      </form>
    </div>
  );
}

export default Login;
