import React from "react";
import Tour from "./Tour";

const Tours = (props) => {
  const tours = props.tours.map((tour) => {
    return <Tour key={tour.id} {...tour} removeTour={props.removeTour} />;
  });
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      {tours}
    </section>
  );
};

export default Tours;
