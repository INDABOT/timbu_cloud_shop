import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home'
import Products from "./Pages/Products";
import Display from "./Pages/Display";
import CheckOut from "./Pages/CheckOut";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/display',
    element: <Display />,
  },
  {
    path: '/shopping',
    element: <CheckOut />,
  }
]);

function App (){
  return(
    <RouterProvider router={router} />
  )
}

export default App;
