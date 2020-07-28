import React from "react";

const Button = props => {
  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
};

export default Button;
