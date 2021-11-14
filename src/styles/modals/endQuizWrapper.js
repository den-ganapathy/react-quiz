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
    input {
      padding: 0.5rem;
      width: 100%;
    }
    .modal-buttons {
      display: flex;
      justify-content: space-between;
      .modal-goback {
        flex: 0 0 30%;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        color: #449302;
        background-color: #fff;
        margin: 1.5rem 0 0.5rem 0;
        padding: 0.6rem 1.5rem;
        cursor: pointer;
        font-weight: bold;
      }
      .modal-start {
        flex: 0 0 30%;
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
  }
`;
