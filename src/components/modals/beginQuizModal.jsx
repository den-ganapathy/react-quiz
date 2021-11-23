import React, { useState } from "react";
import { BeginQuizWrapper } from "../../styles/modals/beginQuizStyles";
import { useHistory } from "react-router-dom";
import { quizConditions } from "./../../constants/quizDetails";
const BeginQuizModal = ({ setShowQuizModal, category, time, noOfQuestion }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.value === "") {
      setError("Please Enter you name");
    } else {
      setError("");
      setName(e.target.value);
    }
  };

  const handleStart = () => {
    if (name === "") {
      setError("Please Enter you name");
    } else {
      setError("");
      setShowQuizModal(false);

      history.push({
        pathname: "/quiz",
        state: {
          category: category,
          name: name,
          time: time,
          noOfQuestion: noOfQuestion,
        },
      });
    }
  };

  return (
    <BeginQuizWrapper>
      <div className="quiz-modal">
        <div className="quiz-instructions">
          <p>Please read the instructions below : </p>
          {quizConditions.map((item, index) => {
            return (
              <div key={index} className="quiz-conditions">
                {item.content}
                <br />
                <br />
              </div>
            );
          })}
        </div>
        <div className="name-header">Enter your name : </div>
        <input type="text" onChange={(e) => handleChange(e)}></input>
        {error && <div className="error-text">{error}</div>}
        <div className="modal-buttons">
          <button
            className="modal-goback"
            onClick={() => setShowQuizModal(false)}
          >
            Go Back
          </button>
          <button className="modal-start" onClick={() => handleStart()}>
            Start
          </button>
        </div>
      </div>
    </BeginQuizWrapper>
  );
};

export default BeginQuizModal;
