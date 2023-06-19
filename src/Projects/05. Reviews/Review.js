import React from "react";
import people from "./Data";
import { useState } from "react";
import "./Styles.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  //   console.log(people);
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  //   console.log(name);

  const prevBtnHandler = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const nextBtnHandler = () => {
    if (index < people.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const randomBtnHandler = () => {
    setIndex(Math.floor(Math.random() * people.length));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevBtnHandler}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextBtnHandler}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomBtnHandler}>
        surprise me
      </button>
    </article>
  );
};
export default Review;
