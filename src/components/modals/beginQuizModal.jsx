import React from "react";
import { BeginQuizWrapper } from "../../styles/modals/beginQuizStyles";

const BeginQuizModal = ({ setShowQuizModal }) => {
  console.log(setShowQuizModal);
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
          <button className="modal-start">Start</button>
        </div>
      </div>
    </BeginQuizWrapper>
  );
};

export default BeginQuizModal;
