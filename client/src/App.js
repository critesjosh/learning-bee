import React, { Component } from "react";
import getWeb3 from "./utils/getWeb3";
import Fortmatic from "fortmatic";
import YouTube from "react-youtube";
import BurnerCore from "@burner-wallet/core"
import {Topbar, Content} from "./Components"
import { InjectedSigner, LocalSigner } from "@burner-wallet/core/signers"
import { InfuraGateway } from "@burner-wallet/core/gateways"
import Web3 from "web3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, burnerCore: null, torusAddress: null };

  constructor(props) {
	  super(props);
	  var lcc = this.genLoadContentComponent(this);
	  var ss = x => this.setState(x);
	  this.state = {
		  storageValue: 0,
		  web3: null,
		  accounts: null,
		  contract: null,
		  burnerCore: null,


			contentComponent: "VideoCoent",
			courses: [],
			course: [],
			video: [],
			test: [],

			f: {loadContentComponent: lcc, setState: ss}
	  }
  }

  genLoadContentComponent(tis) {
	  return (contentComponent, contentData) => {
		  tis.setState({
			  contentComponent: contentComponent
		  });
	  }
  }
	componentDidMount() {
		fetch("http://localhost:8000/courses").then(
			(response) => {
		        response.json().then(data => {
		          this.setState({
		            courses: data.data
		          })
		        })
			}
		)
	}


  componentDidMount = async () => {
    try {
      // // Get network provider and web3 instance.
      // const web3 = await getWeb3();
      let fm = new Fortmatic('pk_live_B7C428D5A6478799');
      const web3 = new Web3(fm.getProvider());
     // const web3 = new Web3(torus.provider);


      // // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      // const client = createDfuseClient({
      //   apiKey: "web_f921afafb18b3ed537fc443387462ab9",
      //   network: "ropsten.eth.dfuse.io",
      // })

      const core = new BurnerCore({
        signers: [new InjectedSigner(), new LocalSigner()],
        gateways: [new InfuraGateway("91d12e33ffac42f096dc6ca9597415a3")],
      });

         

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({
        //web3, accounts, contract: instance,
        burnerCore: core,
        account: accounts[0]
      });
      
      

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }

  endVideo = async () => {
    // Completion info is sent to the server to mint tokens for this users address.
  }
  render() {
	  return (
		  <div className="App">
		  	<Topbar f={this.state.f} />
		  	<Content component={this.state.contentComponent} data={this.state.contentData} f={this.state.f} state={this.state}/>
		  </div>
	  );
  }/*
  render_actual() {

    return (

      <div className="App">
        <YouTube
          videoId="FCMxA3m_Imc"
          onEnd={this.endVideo}
          />

      </div>

    );
}*/
}

export default App;
