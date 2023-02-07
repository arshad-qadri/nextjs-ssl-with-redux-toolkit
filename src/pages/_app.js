import "@/styles/globals.css";
import Header from "@/components/Head";
import  { wrapper } from "../redux/store";

 function App({ Component, pageProps }) {
  return (
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
  );
}

export default wrapper.withRedux(App);