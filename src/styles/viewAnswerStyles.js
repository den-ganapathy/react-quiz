import styled from "styled-components";

export const ViewAnswerWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0e2368;
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
          &-item1 {
            padding: 0.1rem;
            margin: 0.5rem;
            background-color: #b3ea91;
            border: 2px solid darkgreen;
            border-radius: 0.5rem;
          }
          &-item2 {
            padding: 0.1rem;
            margin: 0.5rem;
            background-color: #eaa391;
            border: 2px solid red;
            border-radius: 0.5rem;
          }
          &-item3 {
            padding: 0.1rem;
            margin: 0.5rem;
            background-color: white;
            border: 2px solid gray;
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
    display: flex;
    flex: 0 0 25%;
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
