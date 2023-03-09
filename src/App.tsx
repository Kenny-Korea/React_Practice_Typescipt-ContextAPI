import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import "./input.css";
import { routerItem } from "./utils/pageItems";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          {routerItem.map((item) => {
            return <Route path={item.path} element={item.element} />;
          })}
        </Routes>
      </Layout>
    </>
  );
};

export default App;
