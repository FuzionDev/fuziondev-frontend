import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/meanmenu.min.css";
import "../styles/flaticon.css";
import "react-tabs/style/react-tabs.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "../styles/style.css";
import "../styles/responsive.css";

import Layout from "../components/_App/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      {typeof window != "undefined" ? (
        <Component {...pageProps} />
      ) : (
        <div></div>
      )}
    </Layout>
  );
};

export default MyApp;
