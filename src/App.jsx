// import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import News from './components/News.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js' 
// import Newsitem from "./components/Newsitem.jsx";
function App() {
  let pageSize = 6;
  const apiKey =import.meta.env.VITE_REACT_APP_NEWS_API;
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><News key="general" apiKey={apiKey} defaultImage={"https://th.bing.com/th/id/OIP.wkkd1hrLCYqEMO_2Bx50IQHaEK?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} pageSize={pageSize}/></>,
    },
    {
      path: "/general",
      element: <><Navbar/><News key="general" apiKey={apiKey} category="general" defaultImage={"https://th.bing.com/th/id/OIP.wkkd1hrLCYqEMO_2Bx50IQHaEK?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} pageSize={pageSize}/></>,
    },
    {
      path: "/business",
      element: <><Navbar/><News key="business" apiKey={apiKey} category="business" defaultImage={"https://th.bing.com/th/id/OIP.wkkd1hrLCYqEMO_2Bx50IQHaEK?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} pageSize={pageSize}/></>,
    },
    {
      path: "/entertainment",
      element: <><Navbar/><News key="entertainment" apiKey={apiKey} category="entertainment" defaultImage={"https://th.bing.com/th/id/OIP.wkkd1hrLCYqEMO_2Bx50IQHaEK?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} pageSize={pageSize}/></>,
    },
    {
      path: "/health",
      element: <><Navbar/><News key="health" apiKey={apiKey} category="health" defaultImage={"https://th.bing.com/th/id/OIP.wkkd1hrLCYqEMO_2Bx50IQHaEK?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} pageSize={pageSize}/></>,
    },
    {
      path: "/science",
      element: <><Navbar/><News key="science" apiKey={apiKey} category="science" defaultImage={"https://th.bing.com/th/id/OIP.wkkd1hrLCYqEMO_2Bx50IQHaEK?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} pageSize={pageSize}/></>,
    },
    {
      path: "/sports",
      element: <><Navbar/><News key="sports" apiKey={apiKey} category="sports" defaultImage={"https://th.bing.com/th/id/OIP.wkkd1hrLCYqEMO_2Bx50IQHaEK?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} pageSize={pageSize}/></>,
    },
    {
      path: "/technology",
      element: <><Navbar/><News key="technology" apiKey={apiKey} category="technology" defaultImage={"https://www.bing.com/images/search?view=detailV2&ccid=HPFWeJ5o&id=4FED50EFF0920D06B861D88057006CC9BC44400D&thid=OIP.HPFWeJ5oWgJyn5N7uZj4-wHaEK&mediaurl=https%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f6%2fa%2fe%2f1167263-vertical-hd-technology-wallpapers-1920x1080-large-resolution.jpg&exph=1080&expw=1920&q=technology+images+hd&simid=608009164896762239&FORM=IRPRST&ck=D051CD3D02E7525EA398E69210F34F2B&selectedIndex=0&itb=0"} pageSize={pageSize}/></>,
    },
]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
