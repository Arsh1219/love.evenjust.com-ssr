import { UserWrapper } from "../context/state";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserWrapper>
      <Component {...pageProps} />
    </UserWrapper>
  );
}

export default MyApp;
