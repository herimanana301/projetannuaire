import { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import FirstPage from "./components/Login/FirstPage";
import ContactPage from "./components/PhoneBook/ContactPage";
import CreateContact from "./components/PhoneBook/CreateContact";
import { ForLogedPage, ToHome } from "./components/ForLogedPage";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route
            path="/login"
            element={ToHome(
              <Login
                setEmail={setEmail}
                email={email}
                password={password}
                setPassword={setPassword}
              />
            )}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<ContactPage />} />
          <Route path="/addcontact" element={ForLogedPage(<CreateContact />)} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
