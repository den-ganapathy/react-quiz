import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};
export const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  .timer-container {
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px gray;
    span {
      color: black;
      font-weight: bold;
    }
  }
  ${media.mobile} {
    .timer-container {
      padding: 0.5rem;
      font-size: 0.8rem;
    }
  }
`;
