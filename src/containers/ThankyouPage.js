import React, {Component} from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'
import Thankyou from '../components/Thankyou'

class ThankyouPage extends Component{
	render(){
		return(
			<div>
				<Header2/>
				<Thankyou/>
				<Footer/>
			</div>
		)
	}
}

export default ThankyouPage