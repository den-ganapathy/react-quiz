import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

export const fetchQuiz = () => API.get("/quiz/get-details");
export const fetchQuestions = (category) =>
  API.get(`/quiz/get-questions?category=${category}`);
