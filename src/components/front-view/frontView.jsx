import React, { useState, useEffect, useCallback } from "react";
import { FrontWrapper } from "../../styles/frontStyles";
import clockImg from "./../../assets/clock.png";
import BeginQuizModal from "../modals/beginQuizModal";
import { getQuiz } from "../../actions/quiz";
import { useDispatch, useSelector } from "react-redux";
import { BsBoxArrowRight } from "react-icons/bs";
import _ from "lodash";
import { LoadingWrapper } from "../../styles/utils/loadingStyles";

const FrontView = () => {
  const { debounce } = _;
  const debounceLoadData = useCallback(debounce(fetchData, 1000), []);

  const [showQuizModal, setShowQuizModal] = useState(false);
  const [quizCategory, setQuizCategory] = useState("");
  const [search, setSearch] = useState("");
  const [time, setTime] = useState(0);
  const [noOfQuestion, setNoOfQuestion] = useState(0);
  const dispatch = useDispatch();
  const { quiz, isLoading } = useSelector((state) => state.quiz);

  const handleStart = (category, time, questionCount) => {
    setQuizCategory(category);
    setTime(time);
    setNoOfQuestion(questionCount);
    setShowQuizModal(true);
  };

  function fetchData(search) {
    dispatch(getQuiz(search));
  }

  useEffect(() => {
    debounceLoadData(search);
  }, [debounceLoadData, search]);

  return (
    <>
      {!showQuizModal && (
        <FrontWrapper showQuizModal>
          <div className="searchbar">
            <input
              value={search}
              placeholder="Search..."
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </div>
          {isLoading ? (
            <LoadingWrapper />
          ) : (
            <div className="quiz-container">
              {quiz?.quiz?.quizDetails &&
                quiz.quiz.quizDetails.map((item, index) => {
                  return (
                    <div key={index} className="quiz-item">
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
                            onClick={() =>
                              handleStart(
                                item.category,
                                item.time,
                                item.noOfQuestion
                              )
                            }
                          >
                            Start{" "}
                            <span>
                              <BsBoxArrowRight />
                            </span>
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
          )}
        </FrontWrapper>
      )}

      {showQuizModal && (
        <BeginQuizModal
          setShowQuizModal={setShowQuizModal}
          category={quizCategory}
          time={time}
          noOfQuestion={noOfQuestion}
        />
      )}
    </>
  );
};

export default FrontView;
