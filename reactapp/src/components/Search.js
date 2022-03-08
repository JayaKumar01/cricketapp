import React from "react";
import { TextField } from "@material-ui/core";

const Search = (props) => {
  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    props.inputHandler(lowerCase);
  };

  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
    </div>
  );
};

export default Search;
