import styled from "styled-components";
import Helmet from "react-helmet";

const TITLE = styled.div``;

const ABOUT_CONTAINER = styled.div`
  width: 90vw;
  height: 80vh;
  margin-top: 10px;
  background-color: rgba(172, 172, 172, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: appear 1s ease-in-out forwards;
`;
const ABOUT_TITLE = styled.div`
  font-size: 65px;
  color: white;
  font-weight: 200;
  text-align: center;
  line-height: 1.6;
  animation: appearText 1s ease-in-out forwards;
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;
const ABOUT_SUMMARY = styled.div`
  font-size: 30px;
  color: white;
  font-weight: 200;
  text-align: center;
  line-height: 1.6;
  span {
    font-family: "MaruBuri-Regular";
  }
  animation: appearText 1s ease-in-out forwards;
  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`;

const Header = () => {
  return (
    <>
      <Helmet>
        <title>Ingkellswith | ABOUT</title>
      </Helmet>
      <ABOUT_CONTAINER>
        <TITLE>
          <ABOUT_TITLE>About</ABOUT_TITLE>
          <ABOUT_SUMMARY>
            <br></br>
            <span>한영외국어고등학교 졸업</span>
            <br></br>
            <span>중앙대학교 서울캠퍼스 소프트웨어학부 3학년 휴학</span>
          </ABOUT_SUMMARY>
        </TITLE>
      </ABOUT_CONTAINER>
      <div id="no-mobile">
        <span>Please view this page in desktop!</span>
        <br></br>
        <span class="least">(resolution at least 1850 x 880)</span>
      </div>
    </>
  );
};

export default Header;
