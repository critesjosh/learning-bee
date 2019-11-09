import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import YouTube from "react-youtube";
import BurnerCore from "@burner-wallet/core"
import { InjectedSigner, LocalSigner } from "@burner-wallet/core/signers"
import { InfuraGateway, XDaiGateway } from "@burner-wallet/core/gateways"

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, burnerCore: null };

  componentDidMount = async () => {
    try {
      // // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // // Get the contract instance.
      // const networkId = await web3.eth.net.getId();
      // const deployedNetwork = SimpleStorageContract.networks[networkId];
      // const instance = new web3.eth.Contract(
      //    SimpleStorageContract.abi,
      //    deployedNetwork && deployedNetwork.address,
      // );


      const core = new BurnerCore({
        signers: [new InjectedSigner(), new LocalSigner()],
        gateways: [new InfuraGateway("91d12e33ffac42f096dc6ca9597415a3")],
      });
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ 
        //web3, accounts, contract: instance, 
        burnerCore: core });

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

    let BW, injected, main
    console.log(this.state.burnerCore)
    if(this.state.burnerCore){
      BW = this.state.burnerCore.signers[1]
      injected = this.state.burnerCore.signers[0]
      main = injected.accounts.length > 0 ? injected : BW
    }


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
