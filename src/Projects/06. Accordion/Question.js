import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import style from "./styles.module.css";
import { useState } from "react";

const Question = (props) => {
  const [showInfo, setshowInfo] = useState(false);
  const toggleAnswerHandler = () => {
    setshowInfo(!showInfo);
  };
  //   console.log(props);
  return (
    <article className={style.question}>
      <header>
        <h4>{props.title}</h4>
        <button className={style.btn} onClick={toggleAnswerHandler}>
          {showInfo && <AiOutlineMinus />}
          {!showInfo && <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{props.info}</p>}
    </article>
  );
};
export default Question;
