import React, { useEffect, useState } from "react";
import { ViewAnswerWrapper } from "../../styles/viewAnswerStyles";
import { useHistory } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../actions/quiz";
import { PieChart } from "recharts";

const ViewAnswer = (props) => {
  //   console.log(props);
  //   const category = props.location.state.category;
  //   const quizTime = props.location.state.time;
  console.log(props);
  const answers = props?.location?.answer;

  const history = useHistory();
  const dispatch = useDispatch();
  const { quiz, isLoading } = useSelector((state) => state.quiz);
  console.log(quiz, isLoading, answers);

  const [qno, setQno] = useState(0);
  // console.log(answers[qno], quiz.quizQuestions[0].correctAnswer);
  const [answer, setAnswers] = useState([]);
  const [countUpdated, setCountUpdated] = useState([]);

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
      setQno(quiz.quizQuestions.length - 1);
      history.push("/");
    }
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
    dispatch(getQuestions("Maths-1"));
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <ViewAnswerWrapper>
          <div className="quiz-body">
            {quiz?.quizQuestions &&
              quiz.quizQuestions.map((item, index) => {
                console.log(
                  answers[qno],
                  item.option1,
                  item.option2,
                  item.option3,
                  item.option4
                );
                return (
                  <div key={index} className="quiz-item">
                    {qno === index && (
                      <>
                        <div component="legend" className="answer-form-label">
                          {item.question}
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
                            value={item.correctAnswer}
                            className="answer-radio"
                          >
                            <FormControlLabel
                              value={item.option1}
                              control={<Radio color="success" />}
                              label={item.option1}
                              className={
                                item.correctAnswer === item.option1
                                  ? "answer-radio-item1"
                                  : answers[qno] === undefined
                                  ? "answer-radio-item3"
                                  : answers[qno] === item.option1
                                  ? "answer-radio-item2"
                                  : "answer-radio-item3"
                              }
                            />
                            <FormControlLabel
                              value={item.option2}
                              control={<Radio color="success" />}
                              label={item.option2}
                              className={
                                item.correctAnswer === item.option2
                                  ? "answer-radio-item1"
                                  : answers[qno] === undefined
                                  ? "answer-radio-item3"
                                  : answers[qno] === item.option2
                                  ? "answer-radio-item2"
                                  : "answer-radio-item3"
                              }
                            />
                            <FormControlLabel
                              value={item.option3}
                              control={<Radio color="success" />}
                              label={item.option3}
                              className={
                                item.correctAnswer === item.option3
                                  ? "answer-radio-item1"
                                  : answers[qno] === item.option3
                                  ? "answer-radio-item2"
                                  : "answer-radio-item3"
                              }
                            />
                            <FormControlLabel
                              value={item.option4}
                              control={<Radio color="success" />}
                              label={item.option4}
                              className={
                                item.correctAnswer === item.option4
                                  ? "answer-radio-item1"
                                  : answers[qno] === item.option4
                                  ? "answer-radio-item2"
                                  : "answer-radio-item3"
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
                {qno !== quiz?.quizQuestions?.length - 1 ? "Next" : "Home"}
              </button>
            </div>
          </div>
        </ViewAnswerWrapper>
      )}
    </>
  );
};

export default ViewAnswer;
