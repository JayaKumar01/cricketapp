import "./App.css";
import "../node_modules/bootstrap-4-react/dist/bootstrap-4-react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import authHeader from "./services/auth-header";
import axios from "axios";
import AddAcademy from "./components/AddAcademy";
import AdminDashboard from "./components/Admin/AdminDashboard";
import UserDashboard from "./components/User/UserDashboard";

function App() {
  const [user, setUser] = useState("");
  console.log("Hello World");

  useEffect(() => {
    axios
      .get("user", { headers: authHeader() })
      .then((res) => {
        setMyUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const setMyUser = (user) => {
    setUser(user);
  };

  return (
    <Router>
      <div className="App">
        <Nav user={user} setUser={setMyUser} />

        <Switch>
          <Route
            exact
            path="/login"
            component={() => <Login setUser={setMyUser} />}
          />
          <Route exact path="/" component={() => <Home user={user} />} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/addAcademy" component={AddAcademy} />
          <Route exact path="/admin/dashboard" component={AdminDashboard} />
          <Route exact path="/user/dashboard" component={UserDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
