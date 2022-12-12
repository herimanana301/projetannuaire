import { useState } from "react";
import Axios from "axios";
import Register from "./components/Login/Register";
import "./App.css";

function App() {
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
    <div className="App">
      <Register
        setEmail={setEmailReg}
        setPassword={setPasswordReg}
        firstname={setFirstname}
        lastname={setLastname}
        register={register}
      />
    </div>
  );
}

export default App;
