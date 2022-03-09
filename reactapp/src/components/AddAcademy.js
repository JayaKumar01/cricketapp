import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, Col, Alert } from "react-bootstrap";
import authHeader from "../services/auth-header";
import { useParams, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddAcademy = () => {
  const initialValue = {
    academy_name: "",
    academy_number: "",
    image_url: "",
    academy_email: "",
    academy_location: "",
    academy_description: "",
  };
  const [inputValue, setInputValue] = useState(initialValue);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputValue);
    if (id) {
      axios
        .put("http://localhost:8080/academy/editAcademy/" + id, inputValue, {
          headers: authHeader(),
        })
        .then((respose) => {
          setMsg("Updated Successfully");
          setErr(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:8080/academy/addAcademy", inputValue, {
          headers: authHeader(),
        })
        .then((res) => {
          console.log(res);
          setMsg(res.data);
          setInputValue(initialValue);
        })
        .catch((err) => console.log(err));
      setErr(true);
    }
  };

  const academyChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/academy/editAcademy/" + id, {
        headers: authHeader(),
      })
      .then((res) => {
        setInputValue(res.data);
        // setMsg("Updated Succesfully");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {err && (
        <div className="alert alert-success alert-dismissible">
          {/* <button type="button" className="close" data-dismiss="alert">
            &times;
          </button> */}
          <strong>{msg}</strong>
        </div>
      )}
      <Card className={"border border-dark bg-dark text-dark mt-5 ml-5 mr-5"}>
        {/* <Alert variant="success">{msg}</Alert> */}
        <Card.Header className={"text-white"}>Add Academy</Card.Header>
        <Form onSubmit={submitHandler} id="bookFormId">
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Academy Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="academy_name"
                  value={inputValue.academy_name}
                  onChange={academyChange}
                  className={"bg-light text-dark"}
                  placeholder="Enter Academy Name"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Academy Number</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="academy_number"
                  value={inputValue.academy_number}
                  onChange={academyChange}
                  className={"bg-light text-dark"}
                  placeholder="Enter Academy Number"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Cover Photo URL</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="image_url"
                  value={inputValue.image_url}
                  onChange={academyChange}
                  className={"bg-light text-dark"}
                  placeholder="Enter Cover Photo URL"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Academy Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="academy_email"
                  value={inputValue.academy_email}
                  onChange={academyChange}
                  className={"bg-light text-dark"}
                  placeholder="Enter Academy Email"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Academy Location</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="academy_location"
                  value={inputValue.academy_location}
                  onChange={academyChange}
                  className={"bg-light text-dark"}
                  placeholder="Enter Academy Location"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Academy Description</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="academy_description"
                  value={inputValue.academy_description}
                  onChange={academyChange}
                  className={"bg-light text-dark"}
                  placeholder="Enter Academy Description"
                />
              </Form.Group>
            </Form.Row>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </>
  );
};

export default AddAcademy;

// import React from "react";
// import Card from "./Card";

// const AddAcademy = () => {
//   return <Card></Card>;
// };

// export default AddAcademy;
