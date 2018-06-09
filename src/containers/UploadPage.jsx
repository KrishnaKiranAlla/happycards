import React, {Component} from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'
import Upload from '../components/Upload'

class UploadPage extends Component{
	render(){
		return(
			<div>
				<Header2/>
				<Upload/>
				<Footer/>
			</div>
		)
	}
}

export default UploadPage