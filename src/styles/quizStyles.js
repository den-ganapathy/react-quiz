import styled from "styled-components";

export const QuizWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  background-color: lightblue;
  /* background-image: linear-gradient(#123456, violet); */
  .quiz-body {
    display: flex;
    /* height: 50vh; */
    /* position: absolute; */
    border-radius: 1rem;

    flex: 0 0 50%;
    height: auto;
    background-color: #fff;
    box-shadow: 0 0 10px grey;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
    padding: 2rem;
    flex-direction: column;
    /* max-width: 50rem;
    min-width: 40rem; */
    .quiz-item {
      .answer-form {
        padding: 2rem 0;
        width: 100%;

        &-label {
          display: flex;
          font-size: 1.5rem;
          font-weight: 500;
          justify-content: center;
          color: #123456;
        }
        .answer-radio {
          &-item2 {
            padding: 0.1rem;
            margin: 0.5rem;
            background-color: white;
            border: 1px solid grey;
            border-radius: 0.5rem;
          }
          &-item1 {
            padding: 0.1rem;
            margin: 0.5rem;
            background-color: lightblue;
            border: 2px solid #164392;
            border-radius: 0.5rem;
          }
        }
      }
    }
    .quiz-button {
      display: flex;
      justify-content: space-evenly;
      .quiz-previous {
        /* flex: 0 0 30%; */
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        color: white;
        background-color: darkorange;
        margin: 1.5rem 0 0.5rem 0;
        padding: 0.6rem 1.5rem;
        cursor: pointer;
        font-weight: bold;
        :hover {
          opacity: 0.9;
        }
      }
      .quiz-next {
        /* flex: 0 0 30%; */
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        color: #fff;
        background-color: #419c08;
        margin: 1.5rem 0 0.5rem 0;
        padding: 0.6rem 1.5rem;
        cursor: pointer;
        font-weight: bold;
        :hover {
          opacity: 0.9;
        }
      }
    }
  }
  .timer {
    /* background-color: white; */
    padding: 2rem;
    display: flex;
    flex: 0 0 25%;
    /* background-color: royalblue; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .quiz-end {
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      color: white;
      background-color: red;
      margin: 1.5rem 0 0.5rem 0;
      padding: 0.6rem 1.5rem;
      cursor: pointer;
      font-weight: bold;
      margin-bottom: 25%;
      :hover {
        opacity: 0.9;
      }
    }
    /* .answer-container {
      width: 80%;
      display: flex;
      background-color: white;
      justify-content: space-evenly;
      padding: 1rem;
      border-radius: 0.5rem;
      .answer-item1 {
        width: 2rem;
        height: 2rem;
        padding: 0.2rem;
        border-radius: 50%;
        background-color: green;
        color: white;
        font-weight: bold;
        border: 2px solid green;
      }
      .answer-item2 {
        width: 2rem;
        height: 2rem;
        padding: 0.2rem;
        border-radius: 50%;
        background-color: white;
        color: white;
        border: 2px solid gray;
        font-weight: bold;
      }
    } */
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10rem;
      height: 10rem;
    }
    div {
      font-size: 1.5rem;
      color: red;
      text-align: center;
    }
  }
`;
