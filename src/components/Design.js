import React, { Component } from 'react'
import DesignChild from "./DesignChild"
import {
   BrowserRouter as Router,
   Route,
   Link,
   Switch
} from 'react-router-dom'
class Design extends Component {
   constructor() {
       super();
       const frames = [
           {
               frame: 1,
               src: "images/goldframe.png"
           },
           {
               frame: 2,
               src: "images/flowerframe.png"
           },
           {
               frame: 3,
               src: "images/frame1.png"
           },
           {
               frame: 4,
               src: "images/frame2.png"
           },
           {
               frame: 5,
               src: "images/baloons.png"
           },
           {
               frame: 6,
               src: "images/animals.png"
           }
          
          
       ]
       this.state = {
           frames: frames
       }
   }
   
   
   getframes() {
       this.setState({
           itemsclickes: []
       })
   }

   render() {
       return (
           <div className="container col-md-12 bg-primary">
               
       <div className="col-md-10">
                   <center><h2 className="chs">CHOOSE YOUR DESIGN</h2></center>
                   </div>
                 
       
                   {
                       this.state.frames.map((frames) =>
                           <DesignChild frames={frames} onAddToFrames={this.getframes.bind(this)} />)
                           
                   }

                 
             
           </div>
       )
   }
}
export default Design;