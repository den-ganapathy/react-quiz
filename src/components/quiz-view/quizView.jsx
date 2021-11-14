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

const array = [
  {
    id: "1",
    question: "what is 10 / 2",
    category: "Maths",
    correctAnswer: "5",
    option1: "3",
    option2: "5",
    option3: "1",
    option4: "9",
  },
  {
    id: "2",
    question: "what is 10 / 5",
    category: "Maths",
    correctAnswer: "5",
    option1: "3",
    option2: "5",
    option3: "1",
    option4: "9",
  },
  {
    id: "3",
    question: "what is 10 / 5",
    category: "Maths",
    correctAnswer: "5",
    option1: "3",
    option2: "5",
    option3: "1",
    option4: "9",
  },
  {
    id: "4",
    question: "what is 10 / 2",
    category: "Maths",
    correctAnswer: "5",
    option1: "3",
    option2: "5",
    option3: "1",
    option4: "9",
  },
];

const QuizView = () => {
  const [qno, swtQno] = useState(0);
  const [qValue, setQValue] = useState("");
  const [answer, setAnswers] = useState([]);
  const [endQuizModal, setEndQuizModal] = useState(false);

  const handlePrevious = () => {
    if (qno > 0) {
      swtQno(qno - 1);
      setAnswers(answer);
    } else {
      swtQno(0);
    }
  };

  const handleNext = () => {
    if (qno < array.length - 1) {
      swtQno(qno + 1);
    } else {
      swtQno(array.length - 1);
      setEndQuizModal(true);
    }
  };

  const handleAnswerChange = (e, value) => {
    console.log(e, value);
    let data = { ...answer };
    data[qno] = value;
    console.log(answer, data);
    setAnswers(data);
    swtQno(qno);
  };

  useEffect(() => {
    setTimeout(() => {
      setEndQuizModal(true);
    }, 5000);
  }, []);

  return (
    <QuizWrapper>
      <div className="quiz-body">
        {array.map((item, index) => {
          return (
            <div key={index} className="quiz-item">
              {qno === index && (
                <>
                  <div component="legend" className="answer-form-label">
                    {item.question}
                  </div>
                  <FormControl component="fieldset" className="answer-form">
                    <RadioGroup
                      name={item.id}
                      onChange={(e, value) => handleAnswerChange(e, value)}
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
            <button className="quiz-previous" onClick={() => handlePrevious()}>
              Previous
            </button>
          )}

          <button className="quiz-next" onClick={() => handleNext()}>
            {qno !== array.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
      <div className="timer">
        <button className="quiz-end">End Quiz</button>

        <img src={clock} alt=""></img>
        <div>20 min 00 sec </div>
      </div>
      {endQuizModal && <EndQuizModal />}
    </QuizWrapper>
  );
};

export default QuizView;
