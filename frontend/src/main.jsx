import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Error404 from './pages/error404'
import TeamsPage from './pages/teams/teamsPage'
import HomePage from './pages/homePage'
import TeamsDetails from './pages/teams/teamsDetailes'

const routes = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <Error404/>,
    children:[
      {
        path:"",
        element:<HomePage/>
      },
      {
        path:"teams",
        element: <TeamsPage/>
      },
      {
        path:"teams/:id",
        element: <TeamsDetails/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<RouterProvider router={routes} />
</React.StrictMode>
)
