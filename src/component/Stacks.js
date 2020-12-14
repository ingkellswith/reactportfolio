import { Link } from "react-router-dom";
import styled from "styled-components";
import Helmet from "react-helmet";

const TITLE = styled.div`
  animation: appearText 1s ease-in-out forwards;
  font-size: 30px;
  font-weight: 200;
  margin-top: 20px;
  @media screen and (max-width: 1050px) {
    font-size: 20px;
  }
`;

const STACKS_CONTAINER = styled.div`
  width: 90vw;
  height: 80vh;
  margin-top: 10px;
  background-color: rgba(172, 172, 172, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: appear 1s ease-in-out forwards;
`;

const Stacks = () => {
  return (
    <>
      <Helmet>
        <title>Ingkellswith | STACKS</title>
      </Helmet>
      <STACKS_CONTAINER>
        <TITLE>MAIN STACKS</TITLE>
        <div class="stack-container">
          <Link to="/stacks/nodejs">
            <div class="stack nodejs"></div>
          </Link>
          <Link to="/stacks/react">
            <div class="stack react"></div>
          </Link>
          <Link to="/stacks/python">
            <div class="stack python"></div>
          </Link>
          <Link to="/stacks/unity">
            <div class="stack unity "></div>
          </Link>
        </div>
      </STACKS_CONTAINER>
      <div id="no-mobile">
        <span>Please view this page in desktop!</span>
        <br></br>
        <span class="least">(resolution at least 1850 x 880)</span>
      </div>
    </>
  );
};

export default Stacks;
