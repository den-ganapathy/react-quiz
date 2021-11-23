import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./../components/Header";
import Dashboard from "./../components/dashboard/dashboard";
import FrontView from "./../components/front-view/frontView";
import QuizView from "./../components/quiz-view/quizView";
import ViewAnswer from "./../components/view-answer/viewAnswer.jsx";

function Routes() {
  return (
    <Router>
      <Header />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/quiz" component={QuizView} />
      <Route exact path="/view-answers" component={ViewAnswer} />
      <Route exact path="/" component={FrontView} />
    </Router>
  );
}

export default Routes;
