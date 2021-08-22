import GlobalStyle from "../styles/GlobalStyle";

const MyApp = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
