import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import FirstPage from "./components/Login/FirstPage";
import Details from "./components/PhoneBook/Details";
import ContactPage from "./components/PhoneBook/ContactPage";
import CreateContact from "./components/PhoneBook/CreateContact";
import Admin from "./components/Admin/Admin";
import { ForLogedPage, ToHome } from "./components/ForLogedPage";
import PageNotFound from "./components/NotFound/NotFound";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={ToHome(<FirstPage />)} />
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
          <Route path="/register" element={ToHome(<Register />)} />
          <Route path="/home" element={ForLogedPage(<ContactPage />)} />
          <Route path="/addcontact" element={ForLogedPage(<CreateContact />)} />
          <Route path="/details/:idUsers" element={ForLogedPage(<Details />)} />
          <Route path="/admin" element={ForLogedPage(<Admin />)} />
          <Route path="*" element={<PageNotFound />} status={404} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
