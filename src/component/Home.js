import "../css/styles.css";
import Helmet from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ingkellswith</title>
      </Helmet>
      <section>
        <div class="title">
          <span class="name">Ingkellswith,</span>
          <span class="summary">passionate fullstack developer.</span>
        </div>
      </section>
      <div id="no-mobile">
        <span>Please view this page in desktop!</span>
        <br></br>
        <span class="least">(resolution at least 1850 x 880)</span>
      </div>
    </>
  );
};

export default Home;
