import { useState } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import FirstPage from "./components/Login/FirstPage";
import Navbar from "./components/NavBar/NavBar";
import "./App.css";

export default function App() {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const register = () => {
    Axios.post("http://localhost:3300/register", {
      emailReg,
      passwordReg,
      firstname,
      lastname,
    }).then((response) => {
      console.warn(response);
    });
  };
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/FirstPage" element={<FirstPage />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Register"
            element={
              <Register
                setEmail={setEmailReg}
                setPassword={setPasswordReg}
                firstname={setFirstname}
                lastname={setLastname}
                register={register}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
