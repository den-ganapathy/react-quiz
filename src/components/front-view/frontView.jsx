import React, { useState } from "react";
import { FrontWrapper } from "../../styles/frontStyles";
import clockImg from "./../../assets/clock.png";
import BeginQuizModal from "../modals/beginQuizModal";

const array = [
  { category: "Maths", time: 10, qCount: 10, level: "easy" },
  { category: "Maths", time: 10, qCount: 10, level: "easy" },
  { category: "Maths", time: 10, qCount: 10, level: "easy" },
  { category: "Maths", time: 10, qCount: 10, level: "easy" },
];

const FrontView = () => {
  const [showQuizModal, setShowQuizModal] = useState(false);
  return (
    <>
      <FrontWrapper showQuizModal>
        <div className="quiz-container">
          {array.map((item) => {
            return (
              <div className="quiz-item">
                <div className="quiz-category">{item.category}</div>
                <div className="quiz-content">
                  <div className="quiz-content-left">
                    <div className="quiz-question">
                      Total Question - {item.qCount}
                    </div>
                    <div className="quiz-level">
                      Difficulty Level - {item.level}
                    </div>
                    <button
                      className="quiz-button"
                      onClick={() => setShowQuizModal(true)}
                    >
                      Start
                    </button>
                  </div>
                  <div className="quiz-content-right">
                    <img src={clockImg} alt=""></img>
                    <div>{item.time} Mins</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </FrontWrapper>
      {showQuizModal && <BeginQuizModal setShowQuizModal={setShowQuizModal} />}
    </>
  );
};

export default FrontView;
