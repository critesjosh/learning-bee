import React, { Component } from "react";
import getWeb3 from "./utils/getWeb3";
import Torus from "@toruslabs/torus-embed";
import YouTube from "react-youtube";
import BurnerCore from "@burner-wallet/core"
import { InjectedSigner, LocalSigner } from "@burner-wallet/core/signers"
import { InfuraGateway } from "@burner-wallet/core/gateways"
import Web3 from "web3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, burnerCore: null, torusAddress: null };

  componentDidMount = async () => {
    try {
      // // Get network provider and web3 instance.
      const web3 = await getWeb3();
     // const web3 = new Web3(torus.provider);


      // // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const torus = new Torus();
      await torus.init();
      await torus.login();

      const client = createDfuseClient({
        apiKey: "web_f921afafb18b3ed537fc443387462ab9",
        network: "ropsten.eth.dfuse.io",
      })

      const core = new BurnerCore({
        signers: [new InjectedSigner(), new LocalSigner()],
        gateways: [new InfuraGateway("91d12e33ffac42f096dc6ca9597415a3")],
      });
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ 
        //web3, accounts, contract: instance,
        burnerCore: core,
        torusAddress: torus.provider.selectedAddress
       });

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  endVideo = async () => {
    // Completion info is sent to the server to mint tokens for this users address.
  }
  
  render() {

    return (

      <div className="App">
        <YouTube
          videoId="FCMxA3m_Imc"
          onEnd={this.endVideo}
          />

      </div>

    );
  }
}

export default App;
