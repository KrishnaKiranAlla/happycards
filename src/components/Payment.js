import React, { Component } from 'react';
class Payment extends Component {
    render() {
      return (
        <div className="pym">
        <hr />
        <div className="container  ">
        <h2 className="text-center">Enter your Payment Information</h2>
        <div className=" col-sm-12 ">
          <div className="col-sm-4">
          </div>
          <aside className="col-sm-4">
            <article className="card">
              <div className="card-body ">
                <p> <img src="http://bootstrap-ecommerce.com/main/images/icons/pay-visa.png" /> 
                  <img src="http://bootstrap-ecommerce.com/main/images/icons/pay-mastercard.png" /> 
                  <img src="http://bootstrap-ecommerce.com/main/images/icons/pay-american-ex.png" />
                </p>
                <p className="alert alert-success">Happy Payment</p>
                <form role="form">
                  <div className="form-group">
                    <label htmlFor="username">Full name (on the card)</label>
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-user" /></span>
                      <input type="text" className="form-control" name="username" style={{"text-transform":"uppercase"}} required />
                    </div> {/* input-group.// */}
                  </div> {/* form-group.// */}
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card number</label>
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-credit-card" /></span>
                      <input type="text" className="form-control" name="cardNumber"   />
                    </div> {/* input-group.// */}
                  </div> {/* form-group.// */}
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="form-group">
                        <label>Expiration </label>
                        <div className="form-inline">
                          <select className="form-control" style={{width: '45%'}}>
                            <option>MM</option>
                            <option>01 - January</option>
                            <option>02 - February</option>
                            <option>03 - March
                            </option>
                            <option>04 - April</option>
                            <option>05 - May</option>
                            <option>06 - June
                            </option>
                            <option>07 - July</option>
                            <option>08 - August</option>
                            <option>09 - September
                            </option>
                            <option>10 - October</option>
                            <option>11 - November</option>
                            <option>12 - December
                            </option>
                            </select>
                          <span style={{width: '10%', textAlign: 'center'}}> / </span>
                          <select className="form-control" style={{width: '45%'}}>
                            <option>YY</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                            <option>2031</option>
                            <option>2032</option>
                            <option>2033</option>
                            <option>2034</option>
                            <option>2035</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label data-toggle="tooltip" type="password" title data-original-title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle" /></label>
                        <input className="form-control" required type="password" />
                      </div> {/* form-group.// */}
                    </div>
                  </div> {/* row.// */}
                 <a href="/preview" ><button  className="subscribe btn btn-primary btn-block mb-5" type="button"> Confirm</button></a>
                </form>
                <br/>
              </div> {/* card-body.// */}
            </article> {/* card.// */}
          </aside> 
        </div>
        
      </div>
      </div>
      

    );
}
}

export default Payment;
