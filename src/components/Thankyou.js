import React, { Component } from 'react';
class Thankyou extends Component {
    render() {
      return (
        <div>
          <hr/>
        <div className="container">
        <div className="col-md-12">
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
            <h2>Thanks for your order</h2>
            <h3>Your order number:# {localStorage.getItem("id").slice(1,-1)}</h3>
            <br />
            <br />
            <h4>We will send your card to your recipient as soon as possible.</h4>
          </div>
        </div>
      </div>
      <br/>
      </div>


    );
}
}

export default Thankyou;
