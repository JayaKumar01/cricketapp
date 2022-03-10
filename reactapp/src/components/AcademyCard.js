import React, { useState, useEffect } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ModeEditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../services/user-service";

const AcademyCard = (props) => {
  const user = getCurrentUser();
  const [admin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user.roles[0] === "ROLE_ADMIN") setIsAdmin(true);
  }, []);

  return (
    <div className="col-4 mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={props.academy.image_url}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">
            <strong>Name : </strong> {props.academy.academy_name}
          </p>
          <p className="card-text">
            <strong>Location : </strong> {props.academy.academy_location}
          </p>
          <p className="card-text">{props.academy.academy_description}</p>

          {admin && (
            <Link
              to={`/admin/editAcademy/${props.academy.academy_id}`}
              className="card-link"
            >
              <ModeEditOutlinedIcon />
            </Link>
          )}

          {admin && (
            <Link to="#" className="card-link">
              <DeleteOutlineIcon />
            </Link>
          )}
          <Link to={"/editCourse"} className="card-link">
            <ArrowForwardIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AcademyCard;
