import GlobalStyle from "../styles/GlobalStyle";

import "swiper/swiper-bundle.css";

const MyApp = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
