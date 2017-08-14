import React from 'react';

class Details extends React.Component{

  constructor(props){
      super(props)
  }


  render() {
		var transactions = JSON.parse(this.props.transactions)
    var data = JSON.parse(this.props.voucher_details)
    return(
      <div id='details'>
			<br></br>
			<h3>Voucher details: (Token: {data.data.token}) </h3>
			<br></br>
      <h5> <strong>Balance:</strong> {data.data.balance.cents}</h5>
		  <h5> <strong>Owner:</strong> {data.data.owner.name} </h5>
			<br></br>
		  <h3> Transactions:</h3>
			<table className='table table-hover table-bordered table-striped table-inverse'>
				<thead>
					<tr>
							<th>ID</th>
							<th>Description</th>
							<th>Booked at</th>
							<th>Amount cents</th>
							<th>Origin amount cents</th>
							<th>Card currency amount cents</th>
							<th>Status</th>
							<th>Type</th>
							<th>Fixed fee</th>
					</tr>
				</thead>
				<tbody>
					{transactions.data.map(function(e){return(<tr onClick={() => this.props.getDetails(e.id)} value={e.id} key={e.id}>
								<td scope='row'>{e.id}</td>
								<td scope='row'>{e.description}</td>
								<td scope='row'>{e.booked_at}</td>
								<td scope='row'>{e.amount.cents}</td>
								<td scope='row'>{e.origin_amount.cents}</td>
								<td scope='row'>{e.card_currency_amount.cents}</td>
								<td scope='row'>{e.status}</td>
								<td scope='row'>{e.type}</td>
								<td scope='row'>{e.fixed_fee.cents}</td>
								</tr>)},this)}
				</tbody> 
			</table>
		</div>
      )
    }
}

export default Details
