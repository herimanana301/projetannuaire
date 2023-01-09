import { useState } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import FirstPage from "./components/Login/FirstPage";
import ContactPage from "./components/PhoneBook/ContactPage";
import CreateContact from "./components/PhoneBook/CreateContact";
import ForLogedPage from "./components/ForLogedPage";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLog, setErrorLog] = useState();

  const login = () => {
    Axios.post("http://localhost:3305/login", {
      email,
      password,
    })
      .then((response) => {
        Cookies.set("access_token", response.data.accessToken, {
          sameSite: "Lax",
        });
        console.warn(response.data.accessToken);
      })
      .catch((error) => {
        if (error) {
          setErrorLog(true);
        }
      });
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route
            path="/login"
            element={
              <Login
                setEmail={setEmail}
                setPassword={setPassword}
                login={login}
                errorLog={errorLog}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={ForLogedPage(<ContactPage />)} />
          <Route path="/addcontact" element={ForLogedPage(<CreateContact />)} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
