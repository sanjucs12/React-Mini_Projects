import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const url = "https://course-api.com/react-tabs-project";

const TabsApp = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    //   console.log(jobs);
    setLoading(false);
    setJobs(jobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className={`${styles.section} ${styles.loading}`}>
        <h2>Loading......</h2>
      </section>
    );
  }

  // console.log(jobs[value].title);
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className={styles.section}>
      {/* {loading && <h2>Loading......</h2>} */}
      <div className={styles.title}>
        <h2>Experience</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles["jobs-center"]}>
        {/* btn container */}
        <div className={styles["btn-container"]}>
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className={`${styles["job-btn"]} ${
                  index === value && styles["active-btn"]
                }`}
                onClick={() => {
                  setValue(index);
                }}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* jobs info */}
        <article className={styles["job-info"]}>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className={styles["job-date"]}>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className={styles["job-desc"]} key={index}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
};

export default TabsApp;
