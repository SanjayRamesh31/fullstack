// import { Nav, Navbar, Dropdown } from "rsuite";
// import HomeIcon from '@rsuite/icons/legacy/Home';
// // import CogIcon from '@rsuite/icons/legacy/Cog';
// import { useNavigate } from "react-router-dom";
// import ExitIcon from '@rsuite/icons/Exit';

// const CustomNavbar = () => {
//   const navigate = useNavigate();

//   const handleChange = () => {
//     navigate('/');
//   };

//   const handleChangeLoan = () => {
//     navigate('/loan');
//   };

//   const handleChangeApply = () => {
//     navigate('/apply');
//   };

//   const handleChangeSettings = () => {
//     navigate('/profile');
//   };

//   const handleChangeModule = () => {
//     navigate('/login');
//   };

//   return (
//     <Navbar>
//       <Navbar.Brand href="#">AgroCloud Finance</Navbar.Brand>
//       <Nav>
//         <Nav.Item icon={<HomeIcon />} onClick={handleChange}>
//           Home
//         </Nav.Item>
//         <Nav.Item onClick={handleChangeLoan}>Loan</Nav.Item>
//         <Nav.Item onClick={handleChangeApply}>Who Can Apply</Nav.Item>
//         <Dropdown title="About">
//           <Dropdown.Item>Company</Dropdown.Item>
//           <Dropdown.Item>Team</Dropdown.Item>
//           <Dropdown.Menu title="Contact">
//             <Dropdown.Item>Via email</Dropdown.Item>
//             <Dropdown.Item>Via telephone</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </Nav>
//       <Nav pullRight>
//         <Dropdown title="Settings">
//           <Dropdown.Item onClick={handleChangeSettings}>Profile</Dropdown.Item>
//           <Dropdown.Item icon={<ExitIcon />} onClick={handleChangeModule}>Signout</Dropdown.Item>
//         </Dropdown>
//         <Nav.Item>
//           Signout
//         </Nav.Item>
//       </Nav>
//     </Navbar>
//   );
// };

// export default CustomNavbar;


import { Nav, Navbar, Dropdown } from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import { useNavigate } from "react-router-dom";
import ExitIcon from '@rsuite/icons/Exit';

const CustomNavbar = () => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate('/');
  };

  const handleChangeLoan = () => {
    navigate('/loan');
  };

  const handleChangeApply = () => {
    navigate('/apply');
  };

  const handleChangeSettings = () => {
    navigate('/profile');
  };

  const handleChangeModule = () => {
    navigate('/login');
  };
  const handleChangeFaq =()=>{
    navigate('/faq')
  }

  return (
    <Navbar>
      <Navbar.Brand href="#">AgroCloud Finance</Navbar.Brand>
      <Nav>
        <Nav.Item icon={<HomeIcon />} onClick={handleChange}>
          Home
        </Nav.Item>
        <Nav.Item onClick={handleChangeLoan}>Loan</Nav.Item>
        <Nav.Item onClick={handleChangeApply}>Who Can Apply</Nav.Item>
        <Dropdown title="About">
          <Dropdown.Item onClick={handleChangeFaq}>FAQs</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Menu title="Contact">
            <Dropdown.Item>Via email</Dropdown.Item>
            <Dropdown.Item>Via telephone</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
      <Nav pullRight>
        <Dropdown title="Settings" placement="bottomStart">
          <Dropdown.Item onClick={handleChangeSettings}>Profile</Dropdown.Item>
          <Dropdown.Item icon={<ExitIcon />} onClick={handleChangeModule}>Signout</Dropdown.Item>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
