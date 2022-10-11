import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from '../components/Home'
import ErrorPage from '../components/ErrorPage'
import About from "../components/About";
import Quiz from "../components/Quiz";
import Statistic from "../components/Statistic";
import Blog from "../components/Blog";



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
                path: '/home' ,
                element: <Home></Home>,

            },
            {
                path:'quiz/:id',
                element:<Quiz></Quiz>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
            {
                path: '/statistics',
                element:<Statistic></Statistic>,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
            },
            {
                path: '/blog',
                element:<Blog></Blog>

            },
            {
                path: '/about',
                element:<About></About>

            },
            
        ]
        
    },
])