import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Orders from './components/Orders/Orders'
import Products from './components/Product/Products'
import Categories from './components/Categories/Categories'
import Branches from './components/Branches/Branches'
import Customers from './components/Customers/Customers'
import Report from './components/Report/Report'
import Catalog from './components/Catalog/Catalog'

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to={"/dashboard/orders"} />
        },
        {
            path: "/dashboard",
            element: <Home />,
            children: [
                {
                    path: "/dashboard/orders",
                    element: <Orders />
                },
                {
                    path: "/dashboard/products",
                    element: <Products />
                },
                {
                    path: "/dashboard/categories",
                    element: <Categories />
                },
                {
                    path: "/dashboard/branches",
                    element: <Branches />
                },
                {
                    path: "/dashboard/customers",
                    element: <Customers />
                },
                {
                    path: "/dashboard/report",
                    element: <Report />
                },
                {
                    path: "/dashboard/catalog",
                    element: <Catalog />
                },
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
