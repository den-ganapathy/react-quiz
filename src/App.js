import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/dashboard/dashboard";
import FrontView from "./components/front-view/frontView";
import QuizView from "./components/quiz-view/quizView";
import { MyTimer } from "./components/myTimer";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <Router>
      {/* <MyTimer expiryTimestamp={time} /> */}
      <Header />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={FrontView} />
      <Route exact path="/quiz" component={QuizView} />
    </Router>
  );
}

export default App;
