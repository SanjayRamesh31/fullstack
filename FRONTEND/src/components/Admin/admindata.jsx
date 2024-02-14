// import{ useState } from 'react';
// import '../../assets/css/Admin/admindata.css'

// const AdminProfile = () => {
//   const [adminUser, setAdminUser] = useState({
//     id: 1,
//     username: 'admin_user',
//     firstName: 'Admin',
//     lastName: 'User',
//     role: 'Administrator',
//     email: 'admin@example.com',
//     phoneNumber: '123-456-7890',
//     address: '123 Admin Street, Cityville',
//   });

//   const [isEditing, setEditing] = useState(false);
//   const [editedAdminUser, setEditedAdminUser] = useState({ ...adminUser });

//   const handleEditClick = () => {
//     setEditing(true);
//   };

//   const handleSaveClick = () => {
//     setAdminUser(editedAdminUser);
//     setEditing(false);
//   };

//   const handleCancelClick = () => {
//     setEditedAdminUser({ ...adminUser });
//     setEditing(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedAdminUser({ ...editedAdminUser, [name]: value });
//   };

//   return (
//     <div className="admin-profile">
//       <h2>Admin Profile</h2>
//       {isEditing ? (
//         <>
//           <div>
//             <label>ID:</label> {editedAdminUser.id}
//           </div>
//           <div>
//             <label>Username:</label> {editedAdminUser.username}
//           </div>
//           <div>
//             <label>First Name:</label>
//             <input
//               type="text"
//               name="firstName"
//               value={editedAdminUser.firstName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label>Last Name:</label>
//             <input
//               type="text"
//               name="lastName"
//               value={editedAdminUser.lastName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label>Role:</label>
//             <input
//               type="text"
//               name="role"
//               value={editedAdminUser.role}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="text"
//               name="email"
//               value={editedAdminUser.email}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label>Phone Number:</label>
//             <input
//               type="text"
//               name="phoneNumber"
//               value={editedAdminUser.phoneNumber}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label>Address:</label>
//             <input
//               type="text"
//               name="address"
//               value={editedAdminUser.address}
//               onChange={handleInputChange}
//             />
//           </div>
//           <button onClick={handleSaveClick}>Save</button>
//           <button onClick={handleCancelClick}>Cancel</button>
//         </>
//       ) : (
//         <>
//           <div>
//             <label>ID:</label> {adminUser.id}
//           </div>
//           <div>
//             <label>Username:</label> {adminUser.username}
//           </div>
//           <div>
//             <label>First Name:</label> {adminUser.firstName}
//           </div>
//           <div>
//             <label>Last Name:</label> {adminUser.lastName}
//           </div>
//           <div>
//             <label>Role:</label> {adminUser.role}
//           </div>
//           <div>
//             <label>Email:</label> {adminUser.email}
//           </div>
//           <div>
//             <label>Phone Number:</label> {adminUser.phoneNumber}
//           </div>
//           <div>
//             <label>Address:</label> {adminUser.address}
//           </div>
//           <button onClick={handleEditClick}>Edit</button>

//           <Button className="back" onClick={handleChangeBack}>Back</Button>
//         </>
//       )}
//     </div>
//   );
// };

// export default AdminProfile;

import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Admin/admindata.css';

const AdminProfile = () => {
  const navigate = useNavigate();

  const [adminUser, setAdminUser] = useState({
    id: 1,
    username: 'admin_user',
    firstName: 'Admin',
    lastName: 'User',
    role: 'Administrator',
    email: 'admin@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Admin Street, Cityville',
  });

  const [isEditing, setEditing] = useState(false);
  const [editedAdminUser, setEditedAdminUser] = useState({ ...adminUser });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setAdminUser(editedAdminUser);
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditedAdminUser({ ...adminUser });
    setEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAdminUser({ ...editedAdminUser, [name]: value });
  };

  const handleChangeBack = () => {
    // Handle the navigation to the previous page or a different route
    // Example: navigate('/dashboard');
    navigate('/admin'); // This goes back to the previous page in the history stack
  };

  return (
    <div className="admin-profile">
      <h2>Admin Profile</h2>
      {isEditing ? (
        <>
          <div>
            <label>ID:</label> {editedAdminUser.id}
          </div>
          <div>
            <label>Username:</label> {editedAdminUser.username}
          </div>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={editedAdminUser.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={editedAdminUser.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={editedAdminUser.role}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={editedAdminUser.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={editedAdminUser.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={editedAdminUser.address}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <div>
            <label>ID:</label> {adminUser.id}
          </div>
          <div>
            <label>Username:</label> {adminUser.username}
          </div>
          <div>
            <label>First Name:</label> {adminUser.firstName}
          </div>
          <div>
            <label>Last Name:</label> {adminUser.lastName}
          </div>
          <div>
            <label>Role:</label> {adminUser.role}
          </div>
          <div>
            <label>Email:</label> {adminUser.email}
          </div>
          <div>
            <label>Phone Number:</label> {adminUser.phoneNumber}
          </div>
          <div>
            <label>Address:</label> {adminUser.address}
          </div>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleChangeBack}>Back</button>
        </>
      )}
    </div>
  );
};

export default AdminProfile;
