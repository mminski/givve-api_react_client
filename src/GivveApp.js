import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Customers from './components/Customers'
import Vouchers from './components/Vouchers'
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
const newHistory = createBrowserHistory();


export default class GivveApp extends React.Component{
   constructor(props){
      super(props)
			this.state = {loading: true};
			this.getDetails = this.getDetails.bind(this);
   }
    componentDidMount(){
      this.getData();
     }
  
	loading(){
		if(this.state.loading){
				return true;
		}else{
				return false;
		}
	}
	render(){
				
			if(this.loading()){
			return  <div className="loader"></div>;
			}
			return(
        <Router history={newHistory}>
				<div>
				   <Navbar></Navbar>
			    	<h4> For more information about Givve visit the <a href='https://developer.givve.com/'>Givve Developer Hub</a></h4>  
              <Route path='/customers' render={(props) => (<Customers {...props} customers={this.state.customers} />)} ></Route>         
              <Route path='/vouchers' render={(props) => (<Vouchers {...props} voucher_id={this.state.voucher_id} getDetails={this.getDetails} vouchers={this.state.vouchers} transactions={this.state.transactions} voucher_details={this.state.voucher_details} />)} ></Route>         

        </div>
          </Router>
			)
		}



/// API communication
 
 getData() {
    var that = this;
    var request = require("request");
    var options = { method: 'POST',
    url: 'https://www.givve.com/api/sessions',
    headers: { 'accept-version': 'v2' },
    body: { token: '5412fd40b7453550db0cb1bca3f052c5' },
    json: true };
    request(options, function (error, response, body) {
    if (error) throw new Error(error);
      console.log(body);
      that.setState({jwt: body})
      that.getCustomers(body)
			that.getVouchers(body)
    });
	}

  getCustomers(jwt){
	  var that = this;
    var request = require("request");
		var options = { method: 'GET',
  			url: 'https://www.givve.com/api/customers',
  			headers: 
   			{ authorization: jwt, 
     'accept-version': 'v2' } };
	request(options, function (error, response, body) {
  if (error) throw new Error(error);
      that.setState({customers: body}) 
  });
  }	


	getVouchers(jwt){
		var that = this;
		var request = require("request");
		var options = { method: 'GET',
			url: 'https://www.givve.com/api/vouchers',
			headers: 
			 { authorization: jwt,
				 'accept-version': 'v2' } };
		request(options, function (error, response, body) {
			if (error) throw new Error(error);
			that.setState({vouchers: body}) 
			console.log(body);
			that.setState({loading: false})
		});
	}

  getDetails(voucher_id){
		var that = this;
  	var request = require("request");
		this.setState({voucher_id: voucher_id});
		var options = { method: 'GET',
		url: `https://www.givve.com/api/vouchers/${voucher_id}`,
		headers: 
		 { authorization: that.state.jwt,
			 'accept-version': 'v2' } };
	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		that.setState({voucher_details: body})
		console.log(body);
		that.getTransactions(voucher_id);
	});
  }
	
	
  getTransactions(voucher_id){
		var that = this;
  	var request = require("request");
		var options = { method: 'GET',
		url: `https://www.givve.com/api/vouchers/${voucher_id}/transactions`,
		headers: 
		 { authorization: that.state.jwt,
			 'accept-version': 'v2' } };
	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		that.setState({transactions: body})
		console.log(body);
	});
  }
    

}


