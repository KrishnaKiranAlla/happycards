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
                <button type="button" className="btn btn-primary active btn-lg" data-toggle="modal" data-target="#myModal">Send a Postcard</button>
                <button type="button" className="btn btn-lg" data-toggle="modal" data-target="#myModal">Send a Greeting card</button>
              </div>
            </div>
            <div className="col-lg-7 col-sm-8">
              <img className="img-responsive" src="images/father.jpg" alt="father" />
            </div>
          </div>
        </div>
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

export default Content;
