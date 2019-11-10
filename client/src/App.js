import React, { Component } from "react";
//import getWeb3 from "./utils/getWeb3";
//import YouTube from "react-youtube";
//import BurnerCore from "@burner-wallet/core"
//import { InjectedSigner, LocalSigner } from "@burner-wallet/core/signers"
//import { InfuraGateway } from "@burner-wallet/core/gateways"
//import Fortmatic from 'fortmatic';

import Components, {Topbar, Content} from './Components'

import "./App.css";

class App extends Component {

  constructor(props) {
	  super(props);
	  var lcc = this.genLoadContentComponent(this);
	  this.state = {
		  storageValue: 0,
		  web3: null,
		  accounts: null,
		  contract: null,
		  burnerCore: null,


			contentComponent: "VideoCoent",
			courses: [],

			f: {loadContentComponent: lcc}
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
		        console.log(response)
		        response.json().then(data => {
		          console.log(data)
		          this.setState({
		            courses: data.data
		          })
		        })
			}
		)
	}


  /*componentDidMount = async () => {
    try {
      // // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const fm = new Fortmatic('YOUR_API_KEY');
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
        fortmatic: new Fortmatic('pk_live_B7C428D5A6478799'),
        burnerCore: core });

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
};*/

  endVideo = async () => {
    // Completion info is sent to the server to mint tokens for this users address.
  }
  render() {
	  return (
		  <div className="App">
		  	<Topbar f={this.state.f} />
		  	<Content component={this.state.contentComponent} data={this.state.contentData} f={this.state.f} courses={this.state.courses}/>
		  </div>
	  );
  }/*
  render_actual() {

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
}*/
}

export default App;
