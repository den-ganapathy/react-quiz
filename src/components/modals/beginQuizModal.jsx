import React from "react";
import { BeginQuizWrapper } from "../../styles/modals/beginQuizStyles";
import { useHistory } from "react-router-dom";

const BeginQuizModal = ({ setShowQuizModal }) => {
  console.log(setShowQuizModal);
  const history = useHistory();
  return (
    <BeginQuizWrapper>
      <div className="quiz-modal">
        <input type="text" onChange=""></input>
        <div className="modal-buttons">
          <button
            className="modal-goback"
            onClick={() => setShowQuizModal(false)}
          >
            Go Back
          </button>
          <button className="modal-start" onClick={() => history.push("/quiz")}>
            Start
          </button>
        </div>
      </div>
    </BeginQuizWrapper>
  );
};

export default BeginQuizModal;
