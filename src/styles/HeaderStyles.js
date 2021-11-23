import styled from "styled-components";
const media = {
  mobile: "@media(max-width:600px)",
};
export const HeaderWrapper = styled.div`
  width: 100vw;
  display: flex;
  z-index: 1;
  height: 5rem;
  box-shadow: 0 0 15px black;
  position: fixed;
  background-color: white;
  opacity: 0.8;
  img {
    width: 15rem;
    height: auto;
    background-repeat: no-repeat;
    object-fit: cover;
    cursor: pointer;
  }
  ${media.mobile} {
    height: 3.5rem;
    img {
      width: 10rem;
    }
  }
`;
