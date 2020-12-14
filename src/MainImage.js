import { withRouter } from "react-router-dom";
import styled from "styled-components";
import "./css/styles.css";

const MAIN = styled.div`
  width: 99vw;
  height: 101vh;
  background-image: url("https://images.unsplash.com/photo-1567789733718-254c719b4974?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
  filter: blur(${(props) => (props.current ? "0px" : "20px")});
  transition: 1s filter ease-in-out;
`;

export default withRouter(({ location: { pathname } }) => {
  return <MAIN current={pathname === "/"}></MAIN>;
});
