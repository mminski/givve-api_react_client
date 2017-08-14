import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component{
  constructor(props){
    super(props)
  }

	render(){
    return (
      <div className='container'>   
        <nav className='navbar' >
        <img src='../../images/givve_logo.png'/>
        <Link className='nav-link' to='/customers'>Customers</Link>
        <Link className='nav-link' to='/vouchers'>Vouchers</Link>
        </nav>
      </div>
    );
 
    }
}

export default Navbar
