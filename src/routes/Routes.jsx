import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import Coffees from "../pages/Coffees"
const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        // index: true,
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/coffees',
        element: <Coffees></Coffees>,
      },

      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      }

    ],
  }
])

export default routes