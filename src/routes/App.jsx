import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingLayout } from "../container/LandingLayout/LandingLayout";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Profile } from "../pages/Profile/Profile";
import { Register } from "../pages/Register/Register";
import { Reserve } from "../pages/Reserve/Reserve";
import { Search } from "../pages/Search/Search";
import { store } from "../redux/store";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <LandingLayout>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/search"} element={<Search />} />
            <Route path={"/profile"} element={<Profile />} />
            <Route path={"/reserve"} element={<Reserve />} />
          </Routes>
        </LandingLayout>
      </Provider>
    </BrowserRouter>
  );
};

export { App };
