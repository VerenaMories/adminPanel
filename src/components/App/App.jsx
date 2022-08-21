import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Notfound from "../Notfound/Notfound";
import Register from "../Register/Register";
import Login from "./../Login/Login";

import { useState } from "react";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { MediaContextProvider } from "../../MediaContext";
import ShowQuotes from "../Show Quotes/ShowQuotes";
import ShowMessages from "../Show Messages/ShowMessages";

function App() {
  const [userData, setUserData] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      console.log(localStorage.getItem("userToken"));
      getUserData();
    }
  }, []);

  function getUserData() {
    let decodedToken = jwtDecode(localStorage.getItem("userToken"));
    setUserData(decodedToken);
  }

  function logOut() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/login");
  }

  function ProtectedRoute({ children }) {
    if (!localStorage.getItem("userToken")) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  }

  return (
    <>
      <Navbar userData={userData} logOut={logOut} />

      <MediaContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/showqoutes"
            element={
              <ProtectedRoute>
                <ShowQuotes />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/showmessages"
            element={
              <ProtectedRoute>
                <ShowMessages />
              </ProtectedRoute>
            }
          ></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/login"
            element={<Login getUserData={getUserData} />}
          ></Route>

          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </MediaContextProvider>
    </>
  );
}

export default App;
