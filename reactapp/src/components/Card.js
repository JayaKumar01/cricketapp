import React from "react";

const Card = (props) => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">{props.children}</div>
    </div>
  );
};

export default Card;
