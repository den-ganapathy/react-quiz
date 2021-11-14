import React from "react";
import { EndQuizWrapper } from "../../styles/modals/endQuizWrapper";

const EndQuizModal = () => {
  return (
    <EndQuizWrapper>
      <div className="quiz-modal">
        <input type="text" onChange=""></input>
        <div className="modal-buttons">
          <button className="modal-goback" onClick={() => ""}>
            Go Back
          </button>
          <button className="modal-start">Start</button>
        </div>
      </div>
    </EndQuizWrapper>
  );
};

export default EndQuizModal;
