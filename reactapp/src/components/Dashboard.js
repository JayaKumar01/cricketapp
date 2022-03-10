import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../services/user-service";
import Academy from "./Academy";
import Search from "./Search";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = getCurrentUser();
  const [admin, setIsAdmin] = useState(false);
  const [inputText, setInputText] = useState("");

  const inputHandler = (input) => {
    setInputText(input);
  };

  useEffect(() => {
    if (user.roles[0] === "ROLE_ADMIN") setIsAdmin(true);
  }, []);

  return (
    <>
      <h1>Cricket Academy</h1>
      <Search inputHandler={inputHandler} />
      <Academy input={inputText} />

      {admin && (
        <div className="flex float-right">
          <Link to={"/admin/addAcademy"}>
            <button
              type="button"
              className="btn btn-dark float-right"
              id="add-button"
            >
              <AddIcon />
              Add Academy
            </button>
          </Link>
        </div>
      )}

      {/* {admin && <h2>Admin DashBoard</h2>}
      {!admin && <h2>User DashBoard</h2>} */}
    </>
  );
};

export default Dashboard;
