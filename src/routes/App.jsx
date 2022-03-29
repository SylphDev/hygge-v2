import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingLayout } from "../container/LandingLayout/LandingLayout";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Payment } from "../pages/Payment/Payment";
import { Profile } from "../pages/Profile/Profile";
import { Register } from "../pages/Register/Register";
import { Reserve } from "../pages/Reserve/Reserve";
import { Search } from "../pages/Search/Search";
import { Ready } from "../pages/Ready/Ready";
import { store } from "../redux/store";
import { Admin } from "../pages/Admin/Admin";

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
            <Route path={"/search/:hutName"} element={<Reserve />} />
            <Route path={"/payment"} element={<Payment />} />
            <Route path={"/payment/success"} element={<Ready />} />
            <Route path="/admin" element={<Admin />}/>
          </Routes>
        </LandingLayout>
      </Provider>
    </BrowserRouter>
  );
};

export { App };
