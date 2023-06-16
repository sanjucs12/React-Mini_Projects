import React from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import RefreshBtn from "./RefreshBtn";
import { useState } from "react";
import { useEffect } from "react";

const url = "https://course-api.com/react-tours-project";
const ToursApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
    console.log(newTours);

    // console.log(id);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      //   console.log(tours);
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <div>
      {!tours.length && <RefreshBtn clickHandler={fetchTours} />}
      <main>
        <Tours tours={tours} removeTour={removeTour} />
        {isLoading && <Loading />}
      </main>
    </div>
  );
};
export default ToursApp;
