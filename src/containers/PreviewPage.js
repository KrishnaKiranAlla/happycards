import React, {Component} from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'
import Preview from '../components/Preview'

class PreviewPage extends Component{
	render(){
		return(
			<div>
				<Header2/>
				<Preview/>
				<Footer/>
			</div>
		)
	}
}

export default PreviewPage