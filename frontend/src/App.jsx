import { useState } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import FirstPage from "./components/Login/FirstPage";
import ContactPage from "./components/PhoneBook/ContactPage";
import CreateContact from "./components/PhoneBook/CreateContact";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setloginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3300/login", {
      email,
      password,
    }).then((response) => {
      setloginStatus(response);
      console.warn(loginStatus);
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
          <Route path="/register" element={<Register />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/CreateContact" element={<CreateContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
