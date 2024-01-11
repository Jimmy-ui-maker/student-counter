import React from "react";

const Input = ({ placeholder, type, name }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        className=" rounded-2 border-info form-control shadow-none "
      />
    </div>
  );
};

export default Input;
