import React from 'react';

class Customers extends React.Component{

  constructor(props){
      super(props)
  }


  render() {
    var data = JSON.parse(this.props.customers)
    
    return(
      <div>
      <h1> Customer List </h1>
        <table className='table table-bordered table-striped table-hover table-inverse'>
          <thead>
          <tr>
            <th>Contact person</th>
            <th>Address line 1</th>
            <th>Address line 2</th>
            <th>Zip code</th>
            <th>City</th>
            <th>Country code</th>
            <th>Id</th>
            <th>Number</th>
            <th>Email</th>
            <th>Company</th>
                        </tr>
        </thead>
        <tbody className='table-hover'>
          {data.data.map(function(e){return(<tr key={e.id}>
              <td>{e.address.contact_person}</td>
              <td>{e.address.address_line_1}</td>
              <td>{e.address.address_line_2}</td>
              <td>{e.address.zip_code}</td>
              <td>{e.address.city}</td>
              <td>{e.address.country_code}</td>
              <td>{e.id}</td>
              <td>{e.number}</td>
              <td>{e.email}</td>
              <td>{e.address.company}</td>
                         </tr>)})}
      </tbody>
      </table>
        </div>

      )
    }

}

export default Customers
