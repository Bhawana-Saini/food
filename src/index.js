import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Search from "./component/Search";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Menu from "./component/Menu";
import Second from "./component/Header2";
import Sign from "./component/Sign";
import Cart from "./component/carts/Cart";
import Help from "./component/Help";
import Offer from "./component/Offer";
import Register from "./component/Register";
import NoInternetConnection from "./component/InternetConnect";
import store from "./component/Store"
import { Provider } from "react-redux";

const App = () => {
  // const[currentForm,setCurrentForm]=useState('sign');
  // const toggleForm = (formName)=>{
  //     setCurrentForm(formName);
  // }

  // const user ='a'
  const [pathname, setPathname] = useState(window.location.pathname);
  useEffect(() => {
    setPathname(window.location.pathname)

  });



  if (pathname === "/") {

    return (
      <>
        <NoInternetConnection>
          <Sign  />
        </NoInternetConnection>
      </>
    );
  } else {
    return (
      <>

        <NoInternetConnection>
          <Header />
          {/* <Second /> */}
          <Outlet />
          <Footer />
        </NoInternetConnection>

      </>
    );
  }
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,  
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/restaurant/:id",
        element: <Menu />,
      },
      {
        path: "/Sign-out",
        element: <Sign />,
      },
      {
        path: "/Submit",
        element: <Body />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/See Restraunts",
        element: <Body />,
      },
      // {
      //     path: "/Help",
      //     element: <Help/>
      // },
      {
        path: "/Offers",
        element: <Offer />,
      },
      {
        path: "/menu/:id",
        element: <Menu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
