import styled from "styled-components";

export const FrontWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(
    circle 976px at 51.2% 51%,
    rgba(11, 27, 103, 1) 0%,
    rgba(16, 66, 157, 1) 0%,
    rgba(11, 27, 103, 1) 17.3%,
    rgba(11, 27, 103, 1) 58.8%,
    rgba(11, 27, 103, 1) 71.4%,
    rgba(16, 66, 157, 1) 100.2%,
    rgba(187, 187, 187, 1) 100.2%
  );
  .quiz-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 7rem 0;
    .quiz-item {
      border: 3px solid #123456;
      padding: 1.5rem;
      flex: 0 0 25%;
      background-color: #fff;
      border-radius: 0.3rem;
      margin-bottom: 3rem;
      :hover {
        box-shadow: 0 0 10px black;
      }
      .quiz-category {
        width: 100%;
        background-color: orangered;
        text-align: center;
        padding: 0.5rem 0;
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
      }
      .quiz-content {
        display: flex;

        &-left {
          flex: 0 0 70%;
          justify-content: space-between;
          color: #123456;
          font-size: 1rem;
          font-weight: 500;
          .quiz-question {
            margin: 1rem 0;
          }
          .quiz-label {
          }
          .quiz-button {
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            border: 3px solid #449302;
            color: #449302;
            background-color: #fff;
            margin: 1.5rem 0 0.5rem 0;
            padding: 0.6rem 1.5rem;
            cursor: pointer;
            font-weight: bold;
            :hover {
              background-color: #449302;
              color: #fff;
            }
          }
        }
        &-right {
          display: flex;
          flex: 0 0 25%;
          align-items: center;
          flex-direction: column;
          img {
            width: 5rem;
            height: 5rem;
            background-repeat: no-repeat;
            background-size: cover;
          }
          div {
            font-weight: bold;
            font-size: 1rem;
            font-weight: bold;
            margin: 0.5rem 0;
          }
        }
      }
    }
  }
`;
