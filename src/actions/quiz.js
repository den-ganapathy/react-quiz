import {
  END_LOADING,
  START_LOADING,
  FETCH_QUIZ,
  FETCH_QUESTION,
} from "./../constants/actionTypes";

import * as api from "./../api";

export const getQuiz = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchQuiz();
    console.log(data);
    dispatch({ type: FETCH_QUIZ, payload: { quiz: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getQuestions = (category) => async (dispatch) => {
  console.log(category);
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchQuestions(category);
    console.log(data);
    dispatch({
      type: FETCH_QUESTION,
      payload: { quizQuestions: data.quizQuestions },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
