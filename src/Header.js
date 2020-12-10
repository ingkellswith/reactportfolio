import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import "./css/styles.css";

const LINK = styled(Link)`
  textdecoration: "none";
  color: white;
`;

const Header = () => {
  return (
    <header>
      <div class="header-title">
        <LINK to="/">Ingkellswith</LINK>
      </div>
      <div class="menu">
        <div class="about">
          <LINK to="/about">About</LINK>
        </div>
        <div class="stacks">
          <LINK to="/stacks">Stacks</LINK>
        </div>
      </div>
    </header>
  );
};

export default Header;
