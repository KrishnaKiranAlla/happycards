import React, {Component} from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'
import Payment from '../components/Payment'

class PaymentPage extends Component{
	render(){
		return(
			<div>
				<Header2/>
				<Payment/>
				<Footer/>
			</div>
		)
	}
}

export default PaymentPage