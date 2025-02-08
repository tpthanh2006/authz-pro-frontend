import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useEffect } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Reset from "./pages/auth/Reset";
import Forgot from "./pages/auth/Forgot";
import Register from "./pages/auth/Register";
import LoginWithCode from "./pages/auth/LoginWithCode";
import Profile from "./pages/profile/Profile";
import Verify from "./pages/auth/Verify";
import ChangePassword from "./pages/changePassword/ChangePassword";
import UserList from "./pages/userList/UserList";
import Loader from "./components/loader/Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoginStatus,
  getUser,
  selectIsLoggedIn,
  selectUser 
} from "./redux/features/auth/authSlice";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getLoginStatus());
    if (isLoggedIn && user === null) {
      dispatch(getUser());
    }
  }, [dispatch, isLoggedIn, user]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={
              <Home />
            }
          /> 
          <Route path="/login" element={
            <Login />
            }
          />
          <Route path="/register" element={
            <Register />
            }
          />
          <Route path="/forgot" element={
            <Forgot />
            }
          />
          <Route path="/resetPassword/:resetToken" element={
              <Reset />
            }
          />
          <Route path="/LoginWithCode/:email" element={
              <LoginWithCode />
            }
          />
          <Route path="/verify/:verificationToken" element={
              <Layout>
                <Verify />
              </Layout>
            }
          />
          <Route path="/profile" element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route path="/changePassword" element={
              <Layout>
                <ChangePassword />
              </Layout>
            }
          />
          <Route path="/users" element={
              <Layout>
                <UserList />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
