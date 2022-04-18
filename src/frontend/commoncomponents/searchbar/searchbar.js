import React, { useEffect, useState } from "react";
import "./style.css";
const Searchbar = (props) => {
  return (
    <div className="content-center">
      <input
        type="search"
        placeholder="search"
        onChange={props.Onchange}
        className="bg-grey search-input"
      />
    </div>
  );
};

export default Searchbar;
