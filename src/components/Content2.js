import React, { Component } from 'react';
class Content extends Component {
    render() {
      return (
        <section id="content">
        <div className="container">
          <div className="col-lg-12 col-sm-12">
            <div className="col-lg-5 col-sm-4">    
              <h2>Your photos on real Postcards</h2>
              <div className="buttons">
              <a href="/upload">  <button type="button" className="btn btn-primary active btn-lg ">Send a Postcard</button></a>
                <button type="button" className="btn btn-lg ">Send a Greeting card</button>
              </div>
            </div>
            <div className="col-lg-7 col-sm-8">
              <img className="img-responsive" src="images/father.jpg" alt="father" />
            </div>
          </div>
        </div>
      </section>


    );
}
}

export default Content;
