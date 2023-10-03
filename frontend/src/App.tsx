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
// import { useState } from 'react'
// const initialItems = [
//     { id: 'item-1', content: 'Item 1', status: 'todo' },
//     { id: 'item-2', content: 'Item 2', status: 'todo' },
//     { id: 'item-3', content: 'Item 3', status: 'done' },
// ];

// export default function App() {
//     const [items, setItems] = useState(initialItems);

//     const onDragStart = (e, id) => {
//         if (id) {
//             e.dataTransfer.setData('text/plain', id);
//         }
//     };

//     const onDragOver = (e) => {
//         e.preventDefault();
//     };

//     const onDrop = (e, newStatus) => {
//         e.preventDefault();
//         const itemId = e.dataTransfer.getData('text/plain');
//         const updatedItems = items.map((item) => {
//             if (item.id === itemId) {
//                 return { ...item, status: newStatus };
//             }
//             return item;
//         });
//         setItems(updatedItems);
//     };

//     return (
//         <div className="flex items-center justify-between h-screen">
//             <div className="w-2/4 border h-screen border-red-500" onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'todo')}>
//                 <h2>Todo</h2>
//                 {items
//                     .filter((item) => item.status === 'todo')
//                     .map((item) => (
//                         <div
//                             key={item.id}
//                             draggable
//                             onDragStart={(e) => onDragStart(e, item.id)}
//                             className="item"
//                         >
//                             {item.content}
//                         </div>
//                     ))}
//             </div>
//             <div className="w-2/4 border h-screen border-blue-500" onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'done')}>
//                 <h2>Done</h2>
//                 {items
//                     .filter((item) => item.status === 'done')
//                     .map((item) => (
//                         <div
//                             key={item.id}
//                             draggable
//                             onDragStart={(e) => onDragStart(e, item.id)}
//                             className="item"
//                         >
//                             {item.content}
//                         </div>
//                     ))}
//             </div>
//         </div>
//     )
// }
