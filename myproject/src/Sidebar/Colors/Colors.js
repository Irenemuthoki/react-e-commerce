import React from "react";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  const handleRadioChange = (event) => {
    handleChange(event.target.value);
  };

  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="test2"
        />
        <span className="checkmark"></span>All
      </label>

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleRadioChange}
          value="black"
          name="test1"
        />
        <span className="checkmark"></span>Black
      </label>

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleRadioChange}
          value="blue"
          name="test1"
        />
        <span className="checkmark"></span>Blue
      </label>

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleRadioChange}
          value="red"
          name="test1"
        />
        <span className="checkmark"></span>Red
      </label>

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleRadioChange}
          value="green"
          name="test1"
        />
        <span className="checkmark"></span>Green
      </label>

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleRadioChange}
          value="white"
          name="test1"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Colors;
