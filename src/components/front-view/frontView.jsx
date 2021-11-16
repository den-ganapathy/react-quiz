import React, { useState, useEffect } from "react";
import { FrontWrapper } from "../../styles/frontStyles";
import clockImg from "./../../assets/clock.png";
import BeginQuizModal from "../modals/beginQuizModal";
import { getQuiz } from "../../actions/quiz";
import { useDispatch, useSelector } from "react-redux";

const FrontView = () => {
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [quizCategory, setQuizCategory] = useState("");

  const dispatch = useDispatch();
  const { quiz, isLoading } = useSelector((state) => state.quiz);

  const handleStart = (category) => {
    setQuizCategory(category);
    setShowQuizModal(true);
  };

  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <FrontWrapper showQuizModal>
          <div className="quiz-container">
            {quiz?.quiz?.quizDetails &&
              quiz.quiz.quizDetails.map((item) => {
                return (
                  <div className="quiz-item">
                    <div className="quiz-category">{item.category}</div>
                    <div className="quiz-content">
                      <div className="quiz-content-left">
                        <div className="quiz-question">
                          Total Question - {item.noOfQuestion}
                        </div>
                        <div className="quiz-level">
                          Difficulty Level - {item.level}
                        </div>
                        <button
                          className="quiz-button"
                          onClick={() => handleStart(item.category)}
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
      )}
      {showQuizModal && (
        <BeginQuizModal
          setShowQuizModal={setShowQuizModal}
          category={quizCategory}
        />
      )}
    </>
  );
};

export default FrontView;
