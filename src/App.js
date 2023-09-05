
import './App.css';
import Home from './screens/Home';
import * as React from "react";
import'../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import'../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  createBrowserRouter ,
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import Cart from './screens/Cart';
import MyOrder from './screens/MyOrder';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  //  children:[{
  //       path: "/login",
  //       element: <Login/>,
  //  }]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/creatuser",
    element:<Signup/>
  },
  {
    path:"/cart",
    element:<Cart></Cart>
  },
  {
    path:"/myOrder",
    element:<MyOrder></MyOrder>
  }
])


function App() {
  return (
    <>
    
    </>
  

  )
  }
export default router;
