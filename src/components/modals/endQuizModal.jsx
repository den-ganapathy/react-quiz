import React from "react";
import { EndQuizWrapper } from "../../styles/modals/endQuizWrapper";
const EndQuizModal = ({ setEndQuizModal, setSuccessModal }) => {
  return (
    <EndQuizWrapper>
      <div className="quiz-modal">
        <div>Your text will be submitted and it cannot be undone</div>
        <div className="modal-buttons">
          <button
            className="modal-goback"
            onClick={() => setEndQuizModal(false)}
          >
            Cancel
          </button>
          <button className="modal-start" onClick={() => setSuccessModal(true)}>
            Submit
          </button>
        </div>
      </div>
    </EndQuizWrapper>
  );
};

export default EndQuizModal;
