import axios from "axios";

const API = axios.create({
  baseURL: "https://quizilicious-api.herokuapp.com",
});

export const fetchQuiz = (search) =>
  API.get(`/quiz/get-details?search=${search}`);
export const fetchQuestions = (category) =>
  API.get(`/quiz/get-questions?category=${category}`);
