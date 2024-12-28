import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
