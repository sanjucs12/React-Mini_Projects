import React from "react";

const RefreshBtn = (props) => {
  return (
    <div className="title">
      <h2>No tours left</h2>
      <button className="btn" onClick={props.clickHandler}>
        Fetch Tours
      </button>
    </div>
  );
};

export default RefreshBtn;
