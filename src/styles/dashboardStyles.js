import styled from "styled-components";

export const DashboardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .marks-scored {
    font-size: 3rem;
    text-align: center;
    padding: 5rem;
  }
  .graph-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    .graph-item {
      display: flex;
      flex: 0 0 25%;
      box-shadow: 0 0 10px grey;
      padding: 2rem;
      align-items: center;
    }
  }
  .buttons-container {
    display: flex;
    justify-content: space-evenly;
    margin: 3rem;
    /* align-items: center; */
    .view-answer {
      display: flex;
      align-items: center;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      color: #fff;
      background-color: #48a268;
      margin: 1.5rem 0 0.5rem 0;
      padding: 0.6rem 1.5rem;
      cursor: pointer;
      font-weight: bold;
      opacity: 0.9;
      :hover {
        opacity: 1;
      }
      span {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        padding-left: 0.5rem;
        /* justify-content: center; */
      }
    }
    .back-home {
      display: flex;
      align-items: center;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      color: #fff;
      background-color: #123456;
      margin: 1.5rem 0 0.5rem 0;
      padding: 0.6rem 1.5rem;
      cursor: pointer;
      font-weight: bold;
      opacity: 0.9;
      :hover {
        /* border: 2px solid darkblue; */
        opacity: 1;
      }
      span {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        padding-right: 0.5rem;
      }
    }
  }
`;
