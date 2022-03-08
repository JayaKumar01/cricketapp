import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Register = () => {
  const data = { username: "", email: "", mobno: "", password: "" };
  const [formValues, setFormValues] = useState(data);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errMsg, setErrmsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    axios
      .post("signup", formValues)
      .then((response) => {
        console.log("Registered Successful");
        console.log(response);
        setIsSubmit(true);
        setErrmsg("User registered Successful");
      })
      .catch((error) => {
        const result =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(error);
        if (JSON.parse(error).status === 500) {
          setErrmsg("Invalid details");
          return;
        } else setErrmsg(result);
      });
    setFormValues(data);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  /* useEffect(() => {
    console.log(formErrors);
    console.log(isSubmit);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
*/
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="User Name"
            value={formValues.username}
            onChange={handleChange}
          />
          <p>{formErrors.username}</p>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
        </div>

        <div className="form-group">
          <label>Mobile No</label>
          <input
            type="tel"
            name="mobno"
            className="form-control"
            placeholder="Mobile Number"
            value={formValues.mobNo}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p>{formErrors.password}</p>
        </div>

        <button className="btn btn-primary btn-block">Sign Up</button>
        {errMsg && (
          <div class="alert alert-secondary mt-2" role="alert">
            {errMsg}
          </div>
        )}
      </form>
    </Card>
  );
};

export default Register;
