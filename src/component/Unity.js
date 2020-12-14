import styled from "styled-components";
import Helmet from "react-helmet";

const UNITY_CONTAINER = styled.div`
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
    .unity-content {
      font-size: 12px;
    }
    .unity-content .span-title {
      font-size: 12px;
    }
    .unity-sourcecode {
      font-size: 8px;
    }
    .unity-works {
      font-size: 8px;
    }
    .unity-clone {
      font-size: 15px;
    }
    .unity-logo {
      width: 90px;
      height: 90px;
    }
  }
`;

const Unity = () => {
  return (
    <>
      <Helmet>
        <title>Ingkellswith | UNITY</title>
      </Helmet>
      <UNITY_CONTAINER>
        <TITLE>UNITY</TITLE>
        <CONTENTS_BOX>
          <div class="unity-logo"></div>
          <div class="unity-clone">Fishing Game Project</div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=cIyDojD8V0w"
          >
            <div class="unity-sourcecode">View Works</div>
          </a>

          <div class="unity-content">
            <span class="span-title">main tools used</span>
            <br></br>
            <span>- Unity</span>
            <span>- Blender</span>
            <span>- ClipStudio</span>
            <span>- C#</span>
          </div>
        </CONTENTS_BOX>
      </UNITY_CONTAINER>
      <div id="no-mobile">
        <span>Please view this page in desktop!</span>
        <br></br>
        <span class="least">(resolution at least 1850 x 880)</span>
      </div>
    </>
  );
};

export default Unity;
