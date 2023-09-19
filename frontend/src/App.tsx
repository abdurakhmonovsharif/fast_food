import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/admin/Home'
import Login from './pages/admin/Login'

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
            ]
        },
        {
            path: "/login",
            element: <Login />
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default App
