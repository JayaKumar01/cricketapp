import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ModeEditOutlinedIcon from "@material-ui/icons/EditOutlined";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const ViewCourse = () => {
  return (
    <>
      <h1>Academy Courses</h1>
      <div className="container">
        <div class="jumbotron row">
          <div class="col">
            <h5 className="">Course Name: Bowler's session</h5>
            <h5 className="mt-4">Number of Students: 222</h5>
            <h5 className="mt-4">Course Available Timings: 6am to 6pm</h5>
          </div>
          <div class="col">
            <h5>Course Duration: 3months</h5>
            <h5 className="mt-4">Course Description: yyyy</h5>
            <div className="mt-4">
              <Link to="#" className="card-link mr-4">
                <ModeEditOutlinedIcon fontSize="large" color="action" />
              </Link>
              <Link to="#" className="card-link mt-4 ml-4">
                <DeleteOutlineIcon fontSize="large" color="action" />
              </Link>
            </div>
          </div>
        </div>

        <div class="jumbotron row">
          <div class="col">
            <h5 className="">Course Name: Bowler's session</h5>
            <h5 className="mt-4">Number of Students: 222</h5>
            <h5 className="mt-4">Course Available Timings: 6am to 6pm</h5>
          </div>
          <div class="col">
            <h5>Course Duration: 3months</h5>
            <h5 className="mt-4">Course Description: yyyy</h5>
            <div className="mt-4">
              <Link to="#" className="card-link mr-4">
                <ModeEditOutlinedIcon fontSize="large" color="action" />
              </Link>
              <Link to="#" className="card-link mt-4 ml-4">
                <DeleteOutlineIcon fontSize="large" color="action" />
              </Link>
            </div>
          </div>
        </div>

        <div class="jumbotron row">
          <div class="col">
            <h5 className="">Course Name: Bowler's session</h5>
            <h5 className="mt-4">Number of Students: 222</h5>
            <h5 className="mt-4">Course Available Timings: 6am to 6pm</h5>
          </div>
          <div class="col">
            <h5>Course Duration: 3months</h5>
            <h5 className="mt-4">Course Description: yyyy</h5>
            <div className="mt-4">
              <Link to="#" className="card-link mr-4">
                <ModeEditOutlinedIcon fontSize="large" color="action" />
              </Link>
              <Link to="#" className="card-link mt-4 ml-4">
                <DeleteOutlineIcon fontSize="large" color="action" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex float-right">
        <Link to="#">
          <button
            type="button"
            className="btn btn-dark float-right"
            id="add-button"
          >
            <AddIcon />
            Add Course
          </button>
        </Link>
      </div>
    </>
  );
};

export default ViewCourse;
