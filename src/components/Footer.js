import React, { Component } from 'react';
class Footer extends Component {
    render() {
      return (
        <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram" /></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus" /></a></li>
                <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope" /></a></li>
              </ul>
            </div>
          </div>	
          <div className="row">
            <div className="col-sm-12 footer-menu">
              <ul id="menu-secondary-menu-us" className="list-unstyled list-inline social text-center">
                <li className="menu-item"><a href="javascript:void();">About Us</a></li>
                <li className="menu-item"><a href="javascript:void();">Blog</a></li>
                <li className="menu-item"><a href="javascript:void();">Press</a></li>
                <li className="menu-item"><a href="javascript:void();">FAQs</a></li>
                <li className="menu-item"><a href="javascript:void();">Contact us</a></li>
                <li className="menu-item"><a href="javascript:void();">Privacy</a></li>
                <li className="menu-item"><a href="javascript:void();">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center copy">
            <p>© 2018 postcardtoindia.com</p><p>
            </p></div>
        </div>
      </section>


    );
}
}

export default Footer;
