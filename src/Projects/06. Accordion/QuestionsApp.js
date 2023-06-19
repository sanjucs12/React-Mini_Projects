import React from "react";
import Question from "./Question";
import data from "./Data";
import style from "./styles.module.css";

const QuestionsApp = () => {
  const questions = data.map((question) => {
    return <Question key={question.id} {...question} />;
  });
  return (
    <main>
      <div className={style.container}>
        <h3>Questions and Answers about login</h3>
        <section className={style.info}>{questions}</section>
      </div>
    </main>
  );
};
export default QuestionsApp;
