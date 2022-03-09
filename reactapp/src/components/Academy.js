import React, { useEffect, useState } from "react";
import { data } from "./Data";
import AcademyCard from "./AcademyCard";
import axios from "axios";
import authHeader from "../services/auth-header";

const Academy = (props) => {
  const [academyList, setAcademyList] = useState([]);

  const filteredData = academyList.filter((academy) => {
    if (props.input === "") {
      return academy;
    } else {
      return academy.academy_name.toLowerCase().includes(props.input);
    }
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/academy", { headers: authHeader() })
      .then((res) => {
        console.log(res);
        setAcademyList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {filteredData.map((academy, id) => (
          <AcademyCard academy={academy} key={academy.academy_id} />
        ))}
      </div>
    </div>
  );
};

export default Academy;
