import React from "react";
import { SuccessWrapper } from "../../styles/modals/successWrapper";
import { useHistory } from "react-router-dom";
const EndQuizModal = ({ correctCount, answer, countUpdated, noOfQuestion }) => {
  const history = useHistory();
  return (
    <SuccessWrapper>
      <div className="success-modal">
        <div>Your text is submitted successfully</div>
        <div className="modal-buttons">
          <button
            className="modal-result"
            onClick={() =>
              history.push({
                pathname: "/dashboard",
                state: {
                  correctCount: correctCount,
                  answer: answer,
                  countUpdated: countUpdated,
                  noOfQuestion: noOfQuestion,
                },
              })
            }
          >
            View Result
          </button>
        </div>
      </div>
    </SuccessWrapper>
  );
};

export default EndQuizModal;
