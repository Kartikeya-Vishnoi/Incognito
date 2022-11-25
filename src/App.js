import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./store/AuthContext";
import UserForm from "./Login_Components/UserForm";
import UserHome from "./Login_Components/UserHome";
import Login from "./Login_Components/Login";
import SignUp from "./Login_Components/SignUp";
import Home from "./components/Home/Home";

function App() {
  const currentuser = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentuser ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route
              path="/userhome"
              element={
                <RequireAuth>
                  <UserHome />
                </RequireAuth>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userform" element={<UserForm />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
