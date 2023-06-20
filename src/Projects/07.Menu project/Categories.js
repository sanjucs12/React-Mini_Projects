import React from "react";
import styles from "./styles.module.css";

const Categories = (props) => {
  return (
    <div className={styles["btn-container"]}>
      {props.categories.map((category, index) => {
        return (
          <button
            key={index}
            className={styles["filter-btn"]}
            onClick={() => {
              props.filteredItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
