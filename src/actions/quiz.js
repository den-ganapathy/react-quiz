import {
  END_LOADING,
  START_LOADING,
  FETCH_QUIZ,
  FETCH_QUESTION,
} from "./../constants/actionTypes";

import * as api from "./../api";

export const getQuiz = (search) => async (dispatch) => {
  try {
    if (search === "") {
      dispatch({ type: START_LOADING });
    }
    const { data } = await api.fetchQuiz(search);
    dispatch({ type: FETCH_QUIZ, payload: { quiz: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getQuestions = (category) => async (dispatch) => {
  try {
    const { data } = await api.fetchQuestions(category);
    dispatch({
      type: FETCH_QUESTION,
      payload: { quizQuestions: data.quizQuestions },
    });
  } catch (error) {
    console.log(error);
  }
};
