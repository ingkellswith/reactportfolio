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
const Nodejs = () => {
  return (
    <>
      <Helmet>
        <title>Ingkellswith | NODEJS</title>
      </Helmet>
      <NODEJS_CONTAINER>
        <TITLE>NODEJS</TITLE>
        <CONTENTS_BOX>
          <div class="youtube-logo"></div>
          <div class="youtube-clone">Youtube Clone Project</div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ingkellswith/wetube"
          >
            <div class="youtube-sourcecode">View SourceCode</div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://immense-badlands-13704.herokuapp.com/"
          >
            <div class="youtube-works">View Works</div>
          </a>
          <div class="content">
            <span class="span-title">main package used</span>
            <br></br>
            <span>- babel</span>
            <span>- aws-sdk</span>
            <span>- axios</span>
            <span>- mongoose</span>
            <span>- express</span>
            <span>- multer</span>
            <span>- passport</span>
            <span>- pug</span>
            <span>- sass</span>
            <span>- webpack</span>
            <span>- multer</span>
          </div>
        </CONTENTS_BOX>
        <LINK to="/stacks/nodejs/socket">
          <div class="next">
            <span>Next Page</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </LINK>
      </NODEJS_CONTAINER>
    </>
  );
};

export default Nodejs;
