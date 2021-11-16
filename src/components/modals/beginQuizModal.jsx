import React from "react";
import { BeginQuizWrapper } from "../../styles/modals/beginQuizStyles";
import { useHistory } from "react-router-dom";

const BeginQuizModal = ({ setShowQuizModal, category }) => {
  console.log(setShowQuizModal, category);
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
          <button
            className="modal-start"
            onClick={() =>
              history.push({
                pathname: "/quiz",
                state: { category: category },
              })
            }
          >
            Start
          </button>
        </div>
      </div>
    </BeginQuizWrapper>
  );
};

export default BeginQuizModal;
