import React, { useState, useRef, useEffect } from "react";
import Data from "./questions.json";
// import Navbar from "./Navbar";
import styles from "./Quiz.module.css";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [score_2, setScore_2] = useState(0);
  const [sectionC, setSectionC] = useState(0);
  const [current_section, set_current_section] = useState("");
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [timer, setTimer] = useState("00:00:00");

  const questions = [1, 2, 3, 4, 5];

  let active = true;
  const myContainer = useRef(null);
  const Ref = useRef(null);

  const options = ["section_1", "section_2", "results"];
  let selectedSection = options[sectionC];

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:10:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 600);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect && selectedSection === "section_1") {
      setScore(score + 1);
    }

    if (isCorrect && selectedSection === "section_2") {
      setScore_2(score_2 + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < 5) {
      setCurrentQuestion(nextQuestion);
      setTotalQuestions(totalQuestions + 1);
    } else {
      setCurrentQuestion(0);
      setSectionC(sectionC + 1);
      setTotalQuestions(totalQuestions + 1);
    }
  };

  return (
    <div className={`${styles.app} row`}>
      {/* <Navbar /> */}
      {selectedSection === "section_1" ? (
        <>
          <div className={`${styles.box} col-md-9`}>
            <div className={`${styles.timer}`}>{timer}</div>
            <div className={`${styles.question_section}`}>
              <div className={`${styles.section_count}`}>
                {Data.section_1[currentQuestion].section}
              </div>
              <div className={`${styles.question_count}`}>
                <div className={`${styles.total_q}`}>
                  Total Number of questions done - <b>{totalQuestions}</b>
                </div>
                <span className={`${styles.q_no}`}>
                  Question {currentQuestion + 1}/{Data.section_1.length}
                </span>
                <div className={`${styles.Qimage}`}>
                  <img
                    src={require(`../quizAssests/${Data.section_1[currentQuestion].image}`)}
                    alt="Question"
                  />
                </div>
              </div>
              <div className={`${styles.question_text}`}>
                {Data.section_1[currentQuestion].questionText}
              </div>
            </div>
            <div className={`${styles.answer_section}`}>
              {Data.section_1[currentQuestion].answerOptions.map(
                (answerOption) => (
                  <button
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                    className={`${styles.options}`}
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </div>
          <div className={`${styles.q_box_box} col-md-3`}>
            {questions.map((question) => (
              <div className={`${styles.q_box} `} ref={myContainer}>
                {question}
              </div>
            ))}
          </div>
        </>
      ) : null}
      {selectedSection === "section_2" ? (
        <>
          <div className={`${styles.box} col-md-9`}>
            <div className={`${styles.question_section}`}>
              <div className={`${styles.section_count}`}>
                {Data.section_2[currentQuestion].section}
              </div>
              <div className={`${styles.question_count}`}>
                <div className={`${styles.total_q}`}>
                  Total Number of questions done - <b>{totalQuestions}</b>
                </div>
                <span className={`${styles.q_no}`}>
                  Question {currentQuestion + 1}/{Data.section_2.length}
                </span>
                <div className={`${styles.Qimage}`}>
                  <img
                    src={require(`../quizAssests/${Data.section_2[currentQuestion].image}`)}
                    alt="Question"
                  />
                </div>
              </div>
              <div className={`${styles.question_text}`}>
                {Data.section_2[currentQuestion].questionText}
              </div>
            </div>
            <div className={`${styles.answer_section}`}>
              {Data.section_2[currentQuestion].answerOptions.map(
                (answerOption) => (
                  <button
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                    className={`${styles.options}`}
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </div>
          <div className={`${styles.q_box_box} col-md-3`}>
            {questions.map((question) => (
              <div className={`${styles.q_box} `}>{question}</div>
            ))}
          </div>
        </>
      ) : null}
      {selectedSection === "results" ? (
        <div>
          <h1>This is the ENDGAME bitch!!!</h1>
          <h4>{score}</h4>
          <h4>{score_2}</h4>
        </div>
      ) : null}
    </div>
  );
}
