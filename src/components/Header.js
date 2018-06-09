import React, { Component } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
class Header extends Component {
    render() {
      return (
        <section id="header">
        {/* <nav className="navbar  navbar-fixed-top" role="navigation"> */}
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <a className="image-responsive" href="javascript:void(0)"><img className="imag"  src="images/logo1.jpg" alt="logo" width={100} /></a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="txt"><a href="javascript:void(0)"><span>Home</span></a></li>
                <li><a href="javascript:void(0)" data-toggle="modal" data-target="#myModal"><span>Greeting Card</span></a></li>
                
                <li><a href="#"><span>About</span></a></li>
                <li><a href="#"><span>Contact Us</span></a></li>
                <li className="dropdown">
                 <SignUp/>
                </li>

                <li className="dropdown">
                <SignIn/> 
                 </li>
              </ul>
            </div>{/* /.navbar-collapse */}
          </div>{/* /.container-collapse */}
        {/* </nav> */}
        <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">×</button>
              <h4 className="modal-title">Welcome!!!</h4>
            </div>
            <div className="modal-body">
              <p>Please Sign In to continue</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
        
      </section>
  
    );
}
}

export default Header;
