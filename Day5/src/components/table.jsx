// TableComponent.jsx

import { useState } from 'react';
import '../../assets/css/Admin/table.css'
// import { Admin } from '@rsuite/icons';
import Dash from './admin';

const UserGroup = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState(Array(3).fill(false)); // Adjust the array length based on the number of rows

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setCheckboxes(Array(3).fill(!selectAll)); // Adjust the array length based on the number of rows
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
    setSelectAll(updatedCheckboxes.every((checkbox) => checkbox));
  };

  return (
    <div style={{display:"flex"}} className='bod'>
        <div className='addashboard-container'>
            <Dash/>
        </div>
        <div className="adminmain">
        <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                id="selectAll"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              Select All
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="checkbox"
                checked={checkboxes[0]}
                onChange={() => handleCheckboxChange(0)}
              />
            </td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                checked={checkboxes[1]}
                onChange={() => handleCheckboxChange(1)}
              />
            </td>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>User</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                checked={checkboxes[1]}
                onChange={() => handleCheckboxChange(1)}
              />
            </td>
            <td>Smith</td>
            <td>smith@example.com</td>
            <td>User</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                checked={checkboxes[1]}
                onChange={() => handleCheckboxChange(1)}
              />
            </td>
            <td>Stave</td>
            <td>steve@example.com</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>
                
              <input
                type="checkbox"
                checked={checkboxes[1]}
                onChange={() => handleCheckboxChange(1)}
              />
            </td>
            <td>Toby</td>
            <td>toby@example.com</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                checked={checkboxes[1]}
                onChange={() => handleCheckboxChange(1)}
              />
            </td>
            <td>Wills Smith</td>
            <td>jane@example.com</td>
            <td>User</td>
          </tr>
          {/* Add more rows as needed */}
          
        </tbody>
      </table>
    </div>
        </div>
    </div>
  );
};

export default UserGroup;