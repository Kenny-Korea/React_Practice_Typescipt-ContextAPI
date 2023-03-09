import React, { ReactComponentElement, ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[calc(100vh-8rem)]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
