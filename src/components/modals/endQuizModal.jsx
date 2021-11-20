import React from "react";
import { EndQuizWrapper } from "../../styles/modals/endQuizWrapper";
import { useHistory } from "react-router-dom";
const EndQuizModal = ({ correctCount, wrongCount, answer, countUpdated }) => {
  const history = useHistory();
  return (
    <EndQuizWrapper>
      <div className="quiz-modal">
        <div>Your text will be submitted and it cannot be undone</div>
        <div className="modal-buttons">
          <button className="modal-goback" onClick={() => ""}>
            Cancel
          </button>
          <button
            className="modal-start"
            onClick={() =>
              history.push({
                pathname: "/dashboard",
                state: {
                  correctCount: correctCount,
                  answer: answer,
                  countUpdated: countUpdated,
                },
              })
            }
          >
            Submit
          </button>
        </div>
      </div>
    </EndQuizWrapper>
  );
};

export default EndQuizModal;
