import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from '../components/Home'
import ErrorPage from '../components/ErrorPage'
import About from "../components/About";


export const router = createBrowserRouter([
    {
        path: '/' , element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/' ,
                element: <Home></Home>,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
               
            },
            {
                path: '/about',
                element:<About></About>

            }
            
        ]
        
    },
])