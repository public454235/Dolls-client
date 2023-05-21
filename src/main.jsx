import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AuthProviders from './components/Providers/AuthProviders';
import Category from './components/Category/Category';
import BabyDetails from './components/BabyDolls/BabyDetails';
import BarbieDetails from './components/BarbieDolls/BarbieDetails';
import GirlDetails from './components/GirlDolls/GirlDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'category',
        element: <Category></Category>
      },
      {
        path: 'babyDetails/:id',
        element: <BabyDetails></BabyDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/servicesdoll/${params.id}`)
      },
      {
        path: 'barbieDolls/:id',
        element: <BarbieDetails></BarbieDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/servicesBarbie/${params.id}`)
      },
      {
        path: 'girldoll/:id',
        element: <GirlDetails></GirlDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/servicesGirl/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-auto max-w-7xl'>
    <React.StrictMode>
      <AuthProviders><RouterProvider router={router} /></AuthProviders>
    </React.StrictMode>,
  </div>
)
