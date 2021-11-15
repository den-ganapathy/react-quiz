import React from "react";
import { HeaderWrapper } from "../styles/HeaderStyles";
import logo from "./../assets/quizlogo.png";
const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} alt=""></img>
    </HeaderWrapper>
  );
};

export default Header;
