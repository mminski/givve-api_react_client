import React from 'react';
import Details from './Details';
class Vouchers extends React.Component{

  constructor(props){
      super(props)
  }


  render() {
    var data = JSON.parse(this.props.vouchers)
  	 
    return(
      <div>
			{this.renderDetails(this.props.transactions)}
      <h1>Voucher List </h1>
        <table className='table table-bordered table-striped table-hover table-inverse'>
        <thead>
        <tr>
            <th>Name</th>  
            <th>Email</th>  
            <th>Address line 1</th>  
            <th>Zip code</th>  
            <th>City</th>  
            <th>Token</th>  
            <th>Expires on</th>  
            <th>Currency</th>  
            <th>Customer ID</th>  
            <th>Recarding state</th>  
          </tr>  
        </thead>
        <tbody>
        {data.data.map(function(e){return(<tr onClick={() => this.props.getDetails(e.id)} value={e.id} key={e.id}>
              <td scope='row'>{e.owner.name}</td>
              <td>{e.owner.email}</td>
              <td>{e.owner.address_line_1}</td>
              <td>{e.owner.zip_code}</td>
              <td>{e.owner.city}</td>
              <td>{e.token}</td>
              <td>{e.expires_on}</td>
              <td>{e.currency}</td>
              <td>{e.customer_id}</td>
              <td>{e.recarding_state}</td>
              </tr>)},this)}
      </tbody>
      </table>
        </div>

      )
    }

renderDetails(v){
if (v !== undefined){
	return <Details  transactions={this.props.transactions} voucher_details={this.props.voucher_details}/>
}}


}

export default Vouchers
