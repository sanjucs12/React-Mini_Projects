import React from "react";
import styles from "./styles.module.css";

const Menu = (props) => {
  return (
    <div className={styles["section-center"]}>
      {props.items.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;
        return (
          <article key={id} className={styles[`menu-item`]}>
            <img src={img} alt={title} className={styles.photo} />
            <div className={styles["item-info"]}>
              <header>
                <h4>{title}</h4>
                <h4 className={styles.price}>${price}</h4>
              </header>
              <p className={styles["item-text"]}>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
