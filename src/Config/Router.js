import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Home from "../Viwes/Home";
import Details from "../Viwes/Detail/Detail";
import Register from "../Components/Rejister";
import Login from "../Components/Login"
import Navbar from "../Components/Navbar/Navbar";

const router = createBrowserRouter([
  
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path: "/",
        element: <Register/>,
      },
      
      
      {
    
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/home",
          element: <Home/>,
        },
        {
          path: "/details/:adId",
          element: <Details/>,
        },
       
        
      ]

  }


  ]);

  function Layout() {
    return <div>
      <Navbar/>
      <Outlet/>
    </div>
  }

  function Router(){
    return<RouterProvider router={router} />
  }

  export default Router;



















