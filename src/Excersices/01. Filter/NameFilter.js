import React from "react";
import { data } from "./Data";
import { useState } from "react";
import "./styles.css";

const NameFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchTermHandler = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  const filteredItems = data.filter((item) => {
    if (searchTerm === "") {
      return item;
    } else if (
      item.firstName.toLowerCase().includes(searchTerm) ||
      item.lastName.toLowerCase().includes(searchTerm)
    ) {
      return item;
    }
  });

  const names = filteredItems.map((name, index) => {
    return (
      <div key={index}>
        {name.firstName} {name.lastName}
      </div>
    );
  });

  return (
    <div className="container">
      <div>
        <input
          type="search"
          placeholder="search for names"
          onChange={searchTermHandler}
        />
      </div>
      <div>{names}</div>
    </div>
  );
};
export default NameFilter;
