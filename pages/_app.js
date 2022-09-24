import { UserWrapper } from "../context/state";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserWrapper>
  );
}

export default MyApp;
