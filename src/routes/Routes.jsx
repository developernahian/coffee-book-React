import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import Coffees from "../pages/Coffees"
import CoffeeCards from "../components/CoffeeCards"
import CoffeeDetails from "../pages/CoffeeDetails"

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    // errorElement: <p>Error</p>,
    children: [
      {
        // index: true,
        path: '/',
        element: <Home></Home>,
        // nested component banale fetch er time e ../ diye hobe
        loader: () => fetch('../categories.json'),
        children: [
          {
            // path: '/category/:nahian', //in coffeeCards.jsx file--> const obj = useParams() //and console.log(obj); -> output: {nahian: 'Dessert Coffee'}
            // // if with distructure const {obj} = useParams() // and console.log(obj); -> output : Dessert Coffee
            path: '/',
            element: <CoffeeCards></CoffeeCards>,
            // If the user visits /category/Black Coffee, the value of category will be "Black Coffee".
            loader: () => fetch('../coffees.json'),
          },
          {
            // path: '/category/:nahian', //in coffeeCards.jsx file--> const obj = useParams() //and console.log(obj); -> output: {nahian: 'Dessert Coffee'}
            // // if with distructure const {obj} = useParams() // and console.log(obj); -> output : Dessert Coffee
            path: '/category/:category',
            element: <CoffeeCards></CoffeeCards>,
            // If the user visits /category/Black Coffee, the value of category will be "Black Coffee".
            loader: () => fetch('../coffees.json'),
          },
        ],
      },
      {
        path: '/coffees',
        element: <Coffees></Coffees>,
        loader: () => fetch('../coffees.json'),
      },

      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/coffee/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader: () => fetch('../coffees.json'),
      }

    ],
  }
])

// export { routes }
export default routes