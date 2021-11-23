import styled from "styled-components";
const media = {
  mobile: "@media(max-width:600px)",
};
export const QuizWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  background-color: #b2c1ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23B2C1FF' stroke-width='0.3' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(31.6) translate(-968.35 -726.27)'%3E%3Cuse fill='%23b0bffc' href='%23s' y='2'/%3E%3Cuse fill='%23b0bffc' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23aebdfa' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23aebdfa' href='%23s'/%3E%3Cuse fill='%23adbbf7' href='%23s' x='2'/%3E%3Cuse fill='%23adbbf7' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(31.6) translate(-968.35 -726.27)'%3E%3Cg fill='%23abb9f5'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(31.6) translate(-968.35 -726.27)'%3E%3Cg fill='%23abb9f5'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(31.6) translate(-968.35 -726.27)'%3E%3Cg fill='%23a9b7f2'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(31.6) translate(-968.35 -726.27)'%3E%3Cg fill='%23B2C1FF'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23a7b5ef'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(31.6) translate(-968.35 -726.27)'%3E%3Cg fill='%23B2C1FF'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(31.6) translate(-968.35 -726.27)'%3E%3Cg fill='%23B2C1FF'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(31.6) translate(-968.35 -726.27)'%3E%3Cg fill='%23B2C1FF'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  ${media.mobile} {
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
  }
  .quiz-body {
    display: flex;
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
    ${media.mobile} {
      flex: 0 0 10%;

      order: 2;
      border-radius: 0.3rem;
      width: 75vw;
      margin: 0 auto;
      padding: 1rem;
    }
    .quiz-item {
      .answer-form {
        padding: 2rem 0;
        width: 100%;
        ${media.mobile} {
          padding: 0;
        }

        &-label {
          display: flex;
          font-size: 1.5rem;
          font-weight: 500;
          justify-content: center;
          color: #123456;
          ${media.mobile} {
            font-size: 1rem;
            padding: 1rem;
          }
        }
        .answer-radio {
          &-item2 {
            padding: 0.1rem;
            margin: 0.5rem;
            background-color: white;
            border: 1px solid grey;
            border-radius: 0.5rem;
            ${media.mobile} {
              padding: 0rem;
            }
          }
          &-item1 {
            padding: 0.1rem;
            margin: 0.5rem;
            background-color: lightblue;
            border: 2px solid #164392;
            border-radius: 0.5rem;
            ${media.mobile} {
              padding: 0rem;
            }
          }
        }
      }
    }
    .quiz-button {
      display: flex;
      justify-content: space-evenly;
      ${media.mobile} {
        justify-content: space-around;
      }
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
        ${media.mobile} {
          font-size: 0.8rem;
          padding: 0.5rem 1rem;
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
        ${media.mobile} {
          font-size: 0.8rem;
          padding: 0.5rem 1rem;
        }
      }
    }
  }
  .timer {
    padding: 2rem;
    display: flex;
    flex: 0 0 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${media.mobile} {
      flex: 0 0 10%;
      order: 1;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
    }
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
      ${media.mobile} {
        font-size: 0.9rem;
        margin: 0;
        padding: 0.5rem;
      }
    }

    img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10rem;
      height: 10rem;
      ${media.mobile} {
        visibility: hidden;
        width: 5rem;
        height: 5rem;
      }
    }
  }
  .buttons-container {
    display: flex;
    justify-content: space-evenly;
    margin: 3rem;

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
