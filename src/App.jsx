import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing"
import LoginWrapper from "./components/LoginWrapper";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashboardWrapper from "./components/DashboardWrapper";
import { loader as userLoader } from "./components/DashboardWrapper";
import Dashboard from "./pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from "./pages/Services";
import Appointment from "./pages/Appointment";
import ReviewsPage from "./pages/ReviewsPage";
import StatisticsPage from "./pages/StatisticsPage";



const router=createBrowserRouter([
  {
    path: '/',
    element: <Landing/>,
    children: [
      {
        index:true,
        element: <LoginWrapper/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'login',
        element: <Login/>
      }
    ]
  },

  {
    path: 'dashboard',
    element: <DashboardWrapper/>,
    loader: userLoader,
    children: [
      {
        path: '',
        element: <Dashboard/>
        
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'appointments',
        element: <Appointment />
      },
      {
        path: 'reviews',
        element: <ReviewsPage /> 
      },
      {
        path: 'statistics',
        element: <StatisticsPage /> 
      }
      
    ]
  },
  
  
  

]);

const App=()=>{
  return<RouterProvider router={router}/>
}

export default App;

