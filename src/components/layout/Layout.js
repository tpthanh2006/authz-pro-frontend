import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content --flex-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;