import React, { Component } from 'react'
import Upload from './Upload';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
class Preview extends Component {

  
    render() {
        return (
            <div className="parent">
                <hr/> 
                <div className="container-fluid">
            <div className="container-fluid parent col-md-12">
                 <div className="col-md-8 ">
                     <h2 className="text-center crd">
                              Preview of your Card
                         </h2>
                     </div>
              <div className="col-md-4">
                     <div className="col-md-1">
                             <a href="/upload"  > <button type="button" className="btn btn-primary btn-md">Cancel</button></a>
                         </div>
                         <div className="col-md-2"></div>
                 <div className="col-md-1">
                        <a href="/address"><button  type="button" className="btn btn-primary active btn-md">Continue</button></a>
                     </div>
                 </div>
             </div>
            
          </div>
          <div className="container">
         
            <img className="image1" src={localStorage.getItem("frame")} />
            <img className="image2" src={localStorage.getItem("image").slice(8,-1)} alt="" />
        
          </div>
            </div>
        )
    }
}
export default Preview;