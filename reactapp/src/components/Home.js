import React, { useState } from "react";
import Card from "./Card";
import Academy from "./Academy";
import Search from "./Search";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
const Home = ({ user }) => {
  const [currentUser, setCurrentUser] = useState(user);
  const [inputText, setInputText] = useState("");

  const inputHandler = (input) => {
    setInputText(input);
  };

  if (currentUser) {
    const jwt = JSON.parse(localStorage.getItem("user")).accessToken;
    const roles = JSON.parse(localStorage.getItem("user")).roles;

    return (
      <>
        <h1>Cricket Academy</h1>
        <Search inputHandler={inputHandler} />
        <Academy input={inputText} />

        <div className="flex float-right">
          <Link to={"/addAcademy"}>
            <button
              type="button"
              className="btn btn-dark float-right"
              id="add-academy"
            >
              <AddIcon />
              Add Academy
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <Card>
      <h2>You are not logged in</h2>
    </Card>
  );
};

export default Home;

/*<div>
        <h5>
          <strong>User Name</strong> : {currentUser.username}
        </h5>
        <h5>
          <strong>Email</strong> : {currentUser.email}
        </h5>
        <h5>
          <strong>Mobile No:</strong> : {currentUser.mobNo}
        </h5>
        <h5>
          <strong>Token:</strong> {jwt.substring(0, 20)} ...{" "}
          {jwt.substr(jwt.length - 20)}
        </h5>
        <h5>
          <strong>Roles :</strong>
          <ul>{roles[0]}</ul>
        </h5>
      </div>*/
