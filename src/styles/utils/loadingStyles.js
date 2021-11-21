import styled, { keyframes } from "styled-components";

const spinner = keyframes`
to{
    transform: rotate(360deg);;
}`;

export const LoadingWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 5px solid #fff;
  border-top-color: #123456;
  animation: ${spinner} 0.6s linear infinite;
`;
