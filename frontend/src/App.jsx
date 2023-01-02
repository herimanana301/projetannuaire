import { useState } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import FirstPage from "./components/Login/FirstPage";
import "./App.css";

function App() {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

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
  const login = () => {
    Axios.post("http://localhost:3300/login", {
      email,
      password,
    }).then((response) => {
      console.warn(response);
    });
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route
            path="/Login"
            element={
              <Login
                setEmail={setEmail}
                setPassword={setPassword}
                login={login}
              />
            }
          />
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

export default App;
