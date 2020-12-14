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
  @media screen and (max-width: 900px), screen and (max-height: 500px) {
    flex-direction: column;
    .reactjs-content {
      font-size: 12px;
    }
    .reactjs-content .span-title {
      font-size: 12px;
    }
    .reactnative-sourcecode {
      font-size: 8px;
    }
    .reactnative-works {
      font-size: 8px;
    }
    .reactnative-clone {
      font-size: 15px;
    }
  }
`;

const LINK = styled(Link)`
  textdecoration: "none";
  color: white;
  font-weight: 200;
  @media screen and (max-width: 900px), screen and (max-height: 500px) {
    .previous span {
      font-size: 11px;
    }
    .previous i {
      font-size: 11px;
    }
  }
`;
const React = () => {
  return (
    <>
      <Helmet>
        <title>Ingkellswith | REACTNATIVE</title>
      </Helmet>
      <REACTJS_CONTAINER>
        <TITLE>REACTNATIVE</TITLE>
        <CONTENTS_BOX>
          <div class="reactnative-logo"></div>
          <div class="reactnative-clone">Weather App Clone Project</div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ingkellswith/fokin-weather"
          >
            <div class="reactnative-sourcecode">View SourceCode</div>
          </a>
          <div class="reactnative-works">
            <span>View Works</span>
            <div class="qrcode"></div>
          </div>

          <div class="reactjs-content">
            <span class="span-title">main package used</span>
            <br></br>
            <span>- expo</span>
            <span>- react-native</span>
          </div>
        </CONTENTS_BOX>
        <LINK to="/stacks/react">
          <div class="previous">
            <i class="fas fa-arrow-left"></i>
            <span>Previous Page</span>
          </div>
        </LINK>
      </REACTJS_CONTAINER>
      <div id="no-mobile">
        <span>Please view this page in desktop!</span>
        <br></br>
        <span class="least">(resolution at least 1850 x 880)</span>
      </div>
    </>
  );
};

export default React;
