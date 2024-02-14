// import { Avatar } from 'rsuite';
import Dash from './admin';
import ApexChart from '../chart';

const AdminDashboard = () => {

  // const adminAvatarUrl = 'url_to_admin_avatar';
  // const adminName = 'Admin Name'; 

  return (
    <>
    <div style={{width:200,float:'left'}}>
      <Dash/>

    </div>
    <div className='admin-content' style={{float:'left'}} >
      <div className="admin-dashboard">
      </div>

      {/* <div className="admin-profile">
        <Avatar circle src={adminAvatarUrl} />
        <span className="admin-name">{adminName}</span>
      </div> */}

      {/* <div className="dashboard-section">
        <h3>Notifications</h3>
        {/* Add your notification components here */}
        {/* <Badge content={3} className="notification-badge">
          Unread Notifications
        </Badge> */}
        {/* Additional notification content goes here */}
      {/* </div> */} 

      {/* Statistics Section */}
      {/* <div className="dashboard-section">
        <h3>Statistics</h3>
        {/* Add your statistical charts or data here */}
        {/* Example: <BarChart data={yourData} /> */}
      {/* </div> */}

      {/* Recent Activity Section
      <div className="dashboard-section">
        <h3>Recent Activity</h3>
        {/* Add your recent activity feed components here */}
        {/* Example: <ActivityFeed items={recentActivity} /> */}
      {/* </div>  */}

      {/* Other Admin Dashboard Content Goes Here */}
      <div className="dashboard-content">
        {/* ... Other components, charts, or information for the admin dashboard */}
      </div>
    <ApexChart/>
    </div>
      {/* </div> */}
    {/* // </div> */}
    
    </>
  );
};

export default AdminDashboard;