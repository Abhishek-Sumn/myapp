import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import useOnline from "./utils/useOnline";
import { Provider } from "react-redux";
import store from "./utils/store";
const Layout = () => {
  const status = useOnline();
  if (!status) {
    return (
      <>
        <h1>Your are offline</h1>
      </>
    );
  }

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

export default Layout;
