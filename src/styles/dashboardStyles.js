import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

export const DashboardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .marks-scored {
    font-size: 3rem;
    text-align: center;
    padding: 6rem;
    padding-bottom: 4rem;
    ${media.mobile} {
      font-size: 1.5rem;
      padding: 6rem 0 2rem 0;
    }
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
      padding: 2rem 3rem 2rem 1rem;
      justify-content: center;
      background-color: white;
      ${media.mobile} {
        padding: 1rem;
      }

      .bar {
        display: flex;
        justify-content: center;
      }
    }
  }
  .buttons-container {
    display: flex;
    justify-content: space-evenly;
    margin: 3rem;
    ${media.mobile} {
      justify-content: space-between;
      margin: 2rem 1.5rem;
    }
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
      }
      ${media.mobile} {
        font-size: 0.8rem;

        padding: 0.5rem 0.8rem;
        span {
          font-size: 1rem;
        }
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
        opacity: 1;
      }
      span {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        padding-right: 0.5rem;
      }
      ${media.mobile} {
        font-size: 0.8rem;
        padding: 0.5rem 0.8rem;
        span {
          font-size: 1rem;
        }
      }
    }
  }
`;
