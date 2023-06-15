import React from "react";
import "./styles.css";
import List from "./List";
import Data from "./Data";
import { useState } from "react";

const Birthday = () => {
  const [people, setPeople] = useState(Data);
  // console.log(people)
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
            // console.log("clicked");
          }}
        >
          clear all
        </button>
      </section>
    </main>
  );
};
export default Birthday;
