import {
  END_LOADING,
  START_LOADING,
  FETCH_QUIZ,
} from "./../constants/actionTypes";

const quizReducer = (state = { isLoading: true, quiz: [] }, action) => {
  console.log(action.payload);
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_QUIZ:
      return { ...state, quiz: action.payload };
    default:
      return state;
  }
};

export default quizReducer;
