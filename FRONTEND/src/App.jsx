
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import Login from "./pages/login"
import Signup from "./pages/signup"
// import Settings from "./pages/settings"
import LoanApplicationForm from "./pages/loan"
import WhoCanApply from "./pages/whocanapply"
import LivestockLoan from "./pages/livestockloan"
import FarmEquipmentLoan from "./pages/farmequipmentloan"
import LandPurchaseLoan from "./pages/landpurchase"
import HorticultureLoan from "./pages/horticulture"
// import ProfileSettings from "./pages/profile"
// import AdminDashboard from "./components/Admin/admindashboard"
import UserProfile from "./pages/profile"
import FAQs from "./pages/faq"
import Dash from "./components/Admin/admin"
import AdminDashboard from "./components/Admin/admindashboard"
import UserGroup from "./components/Admin/table"
import AdminProfile from "./components/Admin/admindata"
// import { Setting } from "@rsuite/icons"

const App=()=>{
  <Login></Login>
  
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Home/>
    },
    {
      path: '/login',
      element:<Login/>
    },
    {
      path: '/signup',
      element:<Signup/>
     },
    // {
    //   path:'/settings',
    //   element:<Settings/>
    // },
    {
      path:'/loan',
      element:<LoanApplicationForm/>
    },
    {
      path:'/apply',
      element:<WhoCanApply/>
    },
    {
      path:'/livestock',
      element:<LivestockLoan/>
    },
    {
      path:'/farm',
      element:<FarmEquipmentLoan/>
    },
    {
      path:'/land',
      element:<LandPurchaseLoan/>
    },
    {
      path:'/horti',
      element:<HorticultureLoan/>
    },
    {
      path:'/profile',
      element:<UserProfile/>
    },
    {
      path:'/admin',
      element:<Dash/>
    },
    {
      path:'/faq',
      element:<FAQs/>
    },
    {
      path:'/dash',
      element:<AdminDashboard/>
    },
    {
      path:'/userprof',
      element:<UserGroup/>
    },
    {
      path:'/admindata',
      element:<AdminProfile/>
    }

  ])

    return (
    <RouterProvider router={router}/>
  )
}

export default App;