import React, {Component} from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'
import Content2 from '../components/Content2'

class Contentpage extends Component{
	render(){
		return(
			<div>
				<Header2/>
				<Content2/>
				<Footer/>
			</div>
		)
	}
}

export default Contentpage