import { Link } from "react-router-dom";
import styled from "styled-components";
import Helmet from "react-helmet";

const REACTJS_CONTAINER = styled.div`
  width: 90vw;
  height: 80vh;
  margin-top: 10px;
  background-color: rgba(172, 172, 172, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: appear 1s ease-in-out forwards;
  position: relative;
`;

const TITLE = styled.div`
  animation: appearText 1s ease-in-out forwards;
  font-size: 30px;
  font-weight: 200;
  margin-top: 20px;
`;
const CONTENTS_BOX = styled.div`
  animation: appearText 1s ease-in-out forwards;
  width: 88vw;
  height: 78vh;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
`;

const LINK = styled(Link)`
  textdecoration: "none";
  color: white;
  font-weight: 200;
`;
const React = () => {
  return (
    <>
      <Helmet>
        <title>Ingkellswith | REACTJS</title>
      </Helmet>
      <REACTJS_CONTAINER>
        <TITLE>REACTJS</TITLE>
        <CONTENTS_BOX>
          <div class="reactjs-logo"></div>
          <div class="reactjs-clone">PopCorn Time Clone Project</div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ingkellswith/Nonflix"
          >
            <div class="reactjs-sourcecode">View SourceCode</div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ingkellswith.github.io/Nonflix/#/"
          >
            <div class="reactjs-works">View Works</div>
          </a>
          <div class="reactjs-content">
            <span class="span-title">main package used</span>
            <br></br>
            <span>- react</span>
            <span>- react-dom</span>
            <span>- react-helmet</span>
            <span>- react-router-dom</span>
            <span>- styled-components</span>
          </div>
        </CONTENTS_BOX>
        <LINK to="/stacks/react/native">
          <div class="next">
            <span>Next Page</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </LINK>
      </REACTJS_CONTAINER>
    </>
  );
};

export default React;
