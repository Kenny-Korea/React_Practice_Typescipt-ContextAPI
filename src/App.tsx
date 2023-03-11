import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import "./input.css";
import { routerItem } from "./utils/pageItems";
import { ItemContextProvider } from "./context/CartContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <ItemContextProvider>
        <Layout>
          <Routes>
            {routerItem.map((item) => {
              return (
                <Route
                  path={item.path}
                  element={item.element}
                  key={item.path}
                />
              );
            })}
          </Routes>
        </Layout>
      </ItemContextProvider>
    </Provider>
  );
};

export default App;
