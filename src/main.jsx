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
import AddToy from './components/AddToy/AddToy';
import AllToys from './components/AllToys/AllToys';
import Details from './components/AllToys/Details/Details';
import MyToy from './components/MyToy/MyToy';
import Update from './components/Update/Update';
import PrivateRoutes from './components/Routes/PrivateRoutes';

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
        path: '/myToy',
        element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>


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
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://dolls-server-assignment11.vercel.app/bookings/${params.id}`)
      },
      {
        path: 'babyDetails/:id',
        element: <BabyDetails></BabyDetails>,
        loader: ({ params }) => fetch(`https://dolls-server-assignment11.vercel.app/servicesdoll/${params.id}`)
      },
      {
        path: 'barbieDolls/:id',
        element: <BarbieDetails></BarbieDetails>,
        loader: ({ params }) => fetch(`https://dolls-server-assignment11.vercel.app/servicesBarbie/${params.id}`)
      },
      {
        path: 'girldoll/:id',
        element: <GirlDetails></GirlDetails>,
        loader: ({ params }) => fetch(`https://dolls-server-assignment11.vercel.app/servicesGirl/${params.id}`)
      },
      {
        path: 'addAToy',
        element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>,

      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>

      },
      {
        path: '/bookings/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://dolls-server-assignment11.vercel.app/bookings/${params.id}`)
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
