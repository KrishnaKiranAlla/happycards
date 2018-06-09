import React, { Component } from 'react'
import {
   BrowserRouter as Router,
   Route,
   Link,
   Switch
} from 'react-router-dom'
class DesignChild extends Component {
   constructor(props) {
       super(props);
       this.state = {
           frames: this.props.frames
       }
   }
   imageClick() {
       // alert("image clicked");
       localStorage.setItem("frame",this.state.frames.src)
       
   }
   onAddToFrames() { this.props.onAddToFrames(this.state.frames) }

   render() {
       return (<fragment><center>
           <div className="picframes col-md-4">
               <div className="container dsgn">
                   <div className="image " style={{ cursor: "pointer" }}>
                      <a href="/preview"> <img  src={this.state.frames.src} alt={this.state.frames.frame} width="200px" height="250px" onClick={()=>this.imageClick() } /></a>
                   </div>
                   
               
               </div>
           </div>
       </center></fragment>)
   }
}
export default DesignChild;