import React from "react";
import styles from "./styles.module.css";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";
import { useState } from "react";

const allCategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];
// console.log(allCategories);
const MenuApp = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filteredItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((items) => {
      return items.category === category;
    });
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className={`${styles.menu} ${styles.section}`}>
        <div className={styles.title}>
          <h2>Our Menu</h2>
          <div className={styles.underline}></div>
        </div>
        <Categories filteredItems={filteredItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default MenuApp;
