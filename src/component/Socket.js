import { Link } from "react-router-dom";
import styled from "styled-components";
import Helmet from "react-helmet";

const NODEJS_CONTAINER = styled.div`
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
const Socket = () => {
  return (
    <>
      <Helmet>
        <title>Ingkellswith | NODEJS</title>
      </Helmet>
      <NODEJS_CONTAINER>
        <TITLE>NODEJS</TITLE>
        <CONTENTS_BOX>
          <div class="catchmind-logo"></div>
          <div class="catchmind-clone">CatchMind Clone Project</div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ingkellswith/GuessMind"
          >
            <div class="catchmind-sourcecode">View SourceCode</div>
          </a>

          <div class="content">
            <span class="span-title">main package used</span>
            <br></br>
            <span>- socket.io</span>
            <span>- gulp</span>
          </div>
        </CONTENTS_BOX>
        <LINK to="/stacks/nodejs">
          <div class="previous">
            <i class="fas fa-arrow-left"></i>
            <span>Previous Page</span>
          </div>
        </LINK>
      </NODEJS_CONTAINER>
    </>
  );
};

export default Socket;
