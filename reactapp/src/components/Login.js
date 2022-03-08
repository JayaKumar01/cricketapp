import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    axios
      .post("signin", data)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        setLogin(true);
        props.setUser(res.data);
      })
      .catch((err) => {
        setMsg("Invalid Login Credentials");
        console.log(err);
      });
  };

  if (login) {
    return <Redirect to={"/"} />;
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary btn-block">Sign In</button>
        {msg && (
          <div class="alert alert-danger mt-2" role="alert">
            {msg}
          </div>
        )}
      </form>
    </Card>
  );
};

export default Login;
