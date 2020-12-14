import { Link } from "react-router-dom";
import styled from "styled-components";
import "./css/styles.css";

const LINK = styled(Link)`
  textdecoration: "none";
  color: white;
  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
`;
const LINK2 = styled(Link)`
  textdecoration: "none";
  color: white;
  @media screen and (max-width: 900px) {
    font-size: 11px;
  }
`;

const Header = () => {
  return (
    <header>
      <div class="header-title">
        <LINK to="/">Ingkellswith</LINK>
      </div>
      <div class="menu">
        <div class="about">
          <LINK2 to="/about">About</LINK2>
        </div>
        <div class="stacks">
          <LINK2 to="/stacks">Stacks</LINK2>
        </div>
      </div>
    </header>
  );
};

export default Header;
