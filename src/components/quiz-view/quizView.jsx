import React, { useEffect, useState } from "react";
import { QuizWrapper } from "../../styles/quizStyles";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import clock from "./../../assets/clock.png";
import EndQuizModal from "../modals/endQuizModal";
import SuccessModal from "./../modals/successModal";
import { MyTimer } from "../myTimer";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../actions/quiz";

const QuizView = (props) => {
  console.log(props);
  const category = props.location.state.category;
  const quizTime = props.location.state.time;
  const noOfQuestion = props.location.state.noOfQuestion;

  const dispatch = useDispatch();
  const { quiz, isLoading } = useSelector((state) => state.quiz);
  console.log(quiz, isLoading);

  const time = new Date();
  time.setSeconds(time.getSeconds() + quizTime * 60);
  const [qno, setQno] = useState(0);
  const [qValue, setQValue] = useState("");
  const [answer, setAnswers] = useState([]);
  const [countUpdated, setCountUpdated] = useState([]);
  const [successModal, setSuccessModal] = useState(false);
  const [endQuizModal, setEndQuizModal] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  console.log(countUpdated, answer);

  const handlePrevious = () => {
    if (qno > 0) {
      setQno(qno - 1);
      setAnswers(answer);
    } else {
      setQno(0);
    }
  };

  const handleNext = () => {
    if (qno < quiz.quizQuestions.length - 1) {
      setQno(qno + 1);
    } else {
      const count = countUpdated.filter(Boolean).length;
      const wrongCount = countUpdated.filter(Boolean).length;
      console.log(wrongCount);
      setQno(quiz.quizQuestions.length - 1);
      setCorrectCount(count);
      setWrongCount(wrongCount);
      setEndQuizModal(true);
    }
  };

  const handleEnd = () => {
    const count = countUpdated.filter(Boolean).length;
    const wrongCount = countUpdated.filter(Boolean).length;
    console.log(wrongCount);
    setQno(quiz.quizQuestions.length - 1);
    setCorrectCount(count);
    setWrongCount(wrongCount);
    setEndQuizModal(true);
  };

  const handleAnswerChange = (e, value, value1) => {
    let data1 = [...countUpdated];
    if (value === value1) {
      data1[qno] = true;
      setCountUpdated(data1);
    } else {
      data1[qno] = false;
      setCountUpdated(data1);
    }

    let data = { ...answer };
    data[qno] = value;
    setAnswers(data);
    setQno(qno);
  };

  useEffect(() => {
    dispatch(getQuestions(category));
  }, [category, dispatch]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = (e) => {
    e.preventDefault();
    const message =
      "Are you sure you want to leave? All provided data will be lost.";
    e.returnValue = message;
    return message;
  };

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <QuizWrapper>
          <div className="quiz-body">
            {quiz?.quizQuestions &&
              quiz.quizQuestions.map((item, index) => {
                return (
                  <div key={index} className="quiz-item">
                    {qno === index && (
                      <>
                        <div component="legend" className="answer-form-label">
                          {qno + 1}.&ensp; {item.question}
                        </div>
                        <FormControl
                          component="fieldset"
                          className="answer-form"
                        >
                          <RadioGroup
                            name={item.id}
                            onChange={(e, value) =>
                              handleAnswerChange(e, value, item.correctAnswer)
                            }
                            value={answer[qno]}
                            className="answer-radio"
                          >
                            <FormControlLabel
                              value={item.option1}
                              control={<Radio color="primary" />}
                              label={item.option1}
                              className={
                                answer[qno] === item.option1
                                  ? "answer-radio-item1"
                                  : "answer-radio-item2"
                              }
                            />
                            <FormControlLabel
                              value={item.option2}
                              control={<Radio color="primary" />}
                              label={item.option2}
                              className={
                                answer[qno] === item.option2
                                  ? "answer-radio-item1"
                                  : "answer-radio-item2"
                              }
                            />
                            <FormControlLabel
                              value={item.option3}
                              control={<Radio color="primary" />}
                              label={item.option3}
                              className={
                                answer[qno] === item.option3
                                  ? "answer-radio-item1"
                                  : "answer-radio-item2"
                              }
                            />
                            <FormControlLabel
                              value={item.option4}
                              control={<Radio color="primary" />}
                              label={item.option4}
                              className={
                                answer[qno] === item.option4
                                  ? "answer-radio-item1"
                                  : "answer-radio-item2"
                              }
                            />
                          </RadioGroup>
                        </FormControl>
                      </>
                    )}
                  </div>
                );
              })}

            <div className="quiz-button">
              {qno !== 0 && (
                <button
                  className="quiz-previous"
                  onClick={() => handlePrevious()}
                >
                  Previous
                </button>
              )}

              <button className="quiz-next" onClick={() => handleNext()}>
                {qno !== quiz?.quizQuestions?.length - 1 ? "Next" : "Submit"}
              </button>
            </div>
          </div>
          <div className="timer">
            <button className="quiz-end" onClick={() => handleEnd()}>
              End Quiz
            </button>

            {/* <div className="answer-container">
              {quiz?.quizQuestions &&
                quiz.quizQuestions.map((item, index) => {
                  return (
                    <div
                      className={
                        answered.includes(qno) || 1 === index
                          ? "answer-item1"
                          : "answer-item2"
                      }
                    >
                      {index}
                    </div>
                  );
                })}
            </div> */}

            <img src={clock} alt=""></img>
            <MyTimer expiryTimestamp={time} setEndQuizModal={setEndQuizModal} />
          </div>
          {endQuizModal && (
            <EndQuizModal
              setEndQuizModal={setEndQuizModal}
              setSuccessModal={setSuccessModal}
            />
          )}
          {successModal && (
            <SuccessModal
              correctCount={correctCount}
              wrongCount={wrongCount}
              countUpdated={countUpdated}
              answer={answer}
              noOfQuestion={noOfQuestion}
            />
          )}
        </QuizWrapper>
      )}
    </>
  );
};

export default QuizView;
