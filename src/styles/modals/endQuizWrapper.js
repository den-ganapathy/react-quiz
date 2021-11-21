import styled from "styled-components";

export const EndQuizWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: black;
  .quiz-modal {
    position: fixed;
    width: 25rem;
    height: auto;
    padding: 2rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px grey;

    background-color: #fff;
    z-index: 999;
    .modal-buttons {
      display: flex;
      justify-content: space-between;
      .modal-goback {
        border: none;
        border-radius: 5px;
        font-size: 1rem;

        background: -webkit-linear-gradient(
          90deg,
          rgba(9, 9, 121, 1) 0%,
          rgba(0, 212, 255, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        background-color: #fff;

        margin: 1.5rem 0 0.5rem 0;
        /* padding: 0.6rem 1.5rem; */
        cursor: pointer;
        font-weight: bold;
      }
      .modal-start {
        flex: 0 0 30%;
        border: none;
        border-radius: 5px;
        font-size: 1rem;

        margin: 1.5rem 0 0.5rem 0;
        padding: 0.6rem 1.5rem;
        cursor: pointer;
        font-weight: bold;
        color: #fff;
        background: rgb(2, 0, 36);
        background: linear-gradient(
          90deg,
          rgba(9, 9, 121, 0.9) 0%,
          rgba(0, 212, 255, 0.9) 100%
        );
        :hover {
          background: linear-gradient(
            90deg,
            rgba(9, 9, 121, 1) 0%,
            rgba(0, 212, 255, 1) 100%
          );
          /* background-color: #449302;
          color: #fff; */
        }
      }
    }
  }
`;
