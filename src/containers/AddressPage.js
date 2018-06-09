import React, {Component} from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'
import Address from '../components/Address'

class AddressPage extends Component{
	render(){
		return(
			<div>
				<Header2/>
				<Address/>
				<Footer/>
			</div>
		)
	}
}

export default AddressPage