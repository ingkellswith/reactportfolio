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

const Python = () => {
  return (
    <>
      <Helmet>
        <title>Ingkellswith | PYTHON</title>
      </Helmet>
      <NODEJS_CONTAINER>
        <TITLE>PYTHON</TITLE>
        <CONTENTS_BOX>
          <div class="python-logo"></div>
          <div class="python-clone">Web Scraper Project</div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://repl.it/@ingkellswith/PythonWebscraper"
          >
            <div class="python-sourcecode">View SourceCode and Works</div>
          </a>

          <div class="python-content">
            <span class="span-title">main package used</span>
            <br></br>
            <span>- beautifulsoup(bs4)</span>
            <span>- flask</span>
            <span>- requests</span>
          </div>
        </CONTENTS_BOX>
      </NODEJS_CONTAINER>
    </>
  );
};

export default Python;
