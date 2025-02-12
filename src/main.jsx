import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

// jodi export korar somoy onek gulo export kora hoy like export {routes} comma diye aro kichu... tokhon evabe destracture kore receive korte hoy
// import { routes } from './routes/Routes'

import routes from './routes/Routes'








createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
    {/* <App /> */}
  </StrictMode>,
)
