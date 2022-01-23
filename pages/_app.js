import '../styles/globals.css'
import '../styles/general.css'
import store from "../store";
import React from "react";
import ReactDOM from "react-dom";
import { ThirdwebProvider } from "@3rdweb/react";
// Importing libraries
import { ThirdwebSDK } from "@3rdweb/sdk"
import { ethers } from "ethers"

function MyApp({ Component, pageProps }) {

// Put the ethereum chain ids of the chains you want to support
  const supportedChainIds = [1, 4, 137];

  /**
   * Include the connectors you want to support
   * injected - MetaMask
   * magic - Magic Link
   * walletconnect - Wallet Connect
   * walletlink - Coinbase Wallet
   */
  const connectors = {
    injected: {},
    magic: {
      apiKey: "pk_...", // Your magic api key
      chainId: 1, // The chain ID you want to allow on magic
    },
    walletconnect: {},
    walletlink: {
      appName: "ETHdemy",
      url: "https://thirdweb.com",
      darkMode: false,
    },
  };


  return <ThirdwebProvider>
 					 <Component {...pageProps} />
 				</ThirdwebProvider>
{
  /*<ThirdwebWeb3Provider>
      <ThirdwebThemeProvider>
  			<Component {...pageProps} />
      </ThirdwebThemeProvider>
    </ThirdwebWeb3Provider>*/}
  
}

export default MyApp
