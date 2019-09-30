import React from "react";

const Input = props => (
  <div className={props.bm ? "form-group  mb-0" : "form-group"}>
    {props.label && <label htmlFor={props.name}>{props.label}</label>}
    <input
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      name={props.name}
      className={props.className}
      placeholder={props.placeholder}
    />
  </div>
);

export default Input;
