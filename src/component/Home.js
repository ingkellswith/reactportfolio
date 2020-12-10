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
    </>
  );
};

export default Home;
