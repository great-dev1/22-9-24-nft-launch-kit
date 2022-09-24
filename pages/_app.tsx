import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "components/mainLayout";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Web3ReactProvider>
  );
};

export default MyApp;
