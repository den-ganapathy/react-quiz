import styled from "styled-components";

export const SuccessWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: white;
  .success-modal {
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
    text-align: center;

    .modal-buttons {
      display: flex;
      justify-content: center;
      padding-top: 1rem;
      .modal-result {
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
