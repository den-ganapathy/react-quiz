import React, { useState, useEffect, useCallback } from "react";
import { FrontWrapper } from "../../styles/frontStyles";
import clockImg from "./../../assets/clock.png";
import BeginQuizModal from "../modals/beginQuizModal";
import { getQuiz } from "../../actions/quiz";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import _ from "lodash";

const FrontView = () => {
  const { debounce } = _;
  const debounceLoadData = useCallback(debounce(fetchData, 1000), []);

  const [showQuizModal, setShowQuizModal] = useState(false);
  const [quizCategory, setQuizCategory] = useState("");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { quiz, isLoading } = useSelector((state) => state.quiz);

  const handleStart = (category) => {
    setQuizCategory(category);
    setShowQuizModal(true);
  };

  function fetchData(search) {
    // axios.get(`http://localhost:8080/quiz/get-details?search=${search}`);
    dispatch(getQuiz(search));
  }

  // useEffect(() => {
  //   dispatch(getQuiz(search));
  // }, [dispatch]);

  useEffect(() => {
    debounceLoadData(search);
  }, [debounceLoadData, search]);

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        !showQuizModal && (
          <FrontWrapper showQuizModal>
            <div className="searchbar">
              <input
                value={search}
                placeholder="Search..."
                type="text"
                onChange={(e) => setSearch(e.target.value)}
              ></input>
            </div>
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
        )
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
