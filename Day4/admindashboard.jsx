import { Avatar, Badge } from 'rsuite';
import Dash from './admin';
import ApexChart from '../chart';

const AdminDashboard = () => {
  // Replace 'url_to_admin_avatar' with the actual URL of the admin's avatar image
  const adminAvatarUrl = 'url_to_admin_avatar';
  const adminName = 'Admin Name'; // Replace with the actual admin's name

  return (
    <>
    <div style={{width:200,float:'left'}}>
      <Dash/>

    </div>
    <div className='admin-content' style={{float:'left'}} >
      <div className="admin-dashboard">
      </div>
      {/* Admin Profile Section */}
      <div className="admin-profile">
        <Avatar circle src={adminAvatarUrl} />
        <span className="admin-name">{adminName}</span>
      </div>

      {/* Notifications Section */}
      <div className="dashboard-section">
        <h3>Notifications</h3>
        {/* Add your notification components here */}
        <Badge content={3} className="notification-badge">
          Unread Notifications
        </Badge>
        {/* Additional notification content goes here */}
      </div>

      {/* Statistics Section */}
      <div className="dashboard-section">
        <h3>Statistics</h3>
        {/* Add your statistical charts or data here */}
        {/* Example: <BarChart data={yourData} /> */}
      </div>

      {/* Recent Activity Section */}
      <div className="dashboard-section">
        <h3>Recent Activity</h3>
        {/* Add your recent activity feed components here */}
        {/* Example: <ActivityFeed items={recentActivity} /> */}
      </div>

      {/* Other Admin Dashboard Content Goes Here */}
      <div className="dashboard-content">
        {/* ... Other components, charts, or information for the admin dashboard */}
      </div>
    </div>
      {/* </div> */}
    {/* // </div> */}
    
    <ApexChart/>
    </>
  );
};

export default AdminDashboard;