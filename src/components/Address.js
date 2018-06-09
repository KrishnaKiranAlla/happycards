import React, { Component } from 'react';
import {
  Redirect,
  Link
} from 'react-router-dom'


class Address extends Component {

  constructor(){
        super();
        this.address=this.address.bind(this);

        this.state={
            address:{},
            loading:false,
            error:false
        }
    }

    address(){
        //
        var formBody=[];
        billingAddress:{
        var fullName=this.refs.fullName.value;
        var surName=this.refs.surName.value;
        var mail=this.refs.mail.value;
        var lane=this.refs.lane.value;
        var door=this.refs.door.value;
        var mobile=this.refs.mobile.value;
        var country=this.refs.country.value;
        var city=this.refs.city.value;
        var pincode=this.refs.pincode.value;
        
        formBody.push(encodeURIComponent("fullName") + "=" + encodeURIComponent(fullName));
        formBody.push(encodeURIComponent("mail") + "=" + encodeURIComponent(mail));
        formBody.push(encodeURIComponent("mobile") + "=" + encodeURIComponent(mobile));
        formBody.push(encodeURIComponent("door") + "=" + encodeURIComponent(door));
        formBody.push(encodeURIComponent("lane") + "=" + encodeURIComponent(lane));
        formBody.push(encodeURIComponent("surName") + "=" + encodeURIComponent(surName));
        formBody.push(encodeURIComponent("country") + "=" + encodeURIComponent(country));
        formBody.push(encodeURIComponent("city") + "=" + encodeURIComponent(city));
        formBody.push(encodeURIComponent("pincode") + "=" + encodeURIComponent(pincode));
        }
        shippingAddress:{
        var fullName=this.refs.fullName1.value;
        var surName=this.refs.surName1.value;
        var mail=this.refs.mail1.value;
        var lane=this.refs.lane1.value;
        var door=this.refs.door1.value;
        var mobile=this.refs.mobile1.value;
        var country=this.refs.country1.value;
        var city=this.refs.city1.value;
        var pincode=this.refs.pincode1.value;
    
       
          formBody.push(encodeURIComponent("fullName1") + "=" + encodeURIComponent(fullName));
          formBody.push(encodeURIComponent("mail1") + "=" + encodeURIComponent(mail));
          formBody.push(encodeURIComponent("mobile1") + "=" + encodeURIComponent(mobile));
          formBody.push(encodeURIComponent("door1") + "=" + encodeURIComponent(door));
          formBody.push(encodeURIComponent("lane1") + "=" + encodeURIComponent(lane));
          formBody.push(encodeURIComponent("surName1") + "=" + encodeURIComponent(surName));
          formBody.push(encodeURIComponent("country1") + "=" + encodeURIComponent(country));
          formBody.push(encodeURIComponent("city1") + "=" + encodeURIComponent(city));
          formBody.push(encodeURIComponent("pincode1") + "=" + encodeURIComponent(pincode));
        }
      
        formBody=formBody.join("&")
      
    
        fetch('/api/address/register',{
          method:'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formBody
      })
        .then((response)=>response.json())
        .then((address)=>{
          console.log(address)
          if(typeof address.error !== 'undefined'){
            this.setState({
              error:true
            })
            alert("address failure:" +address.error)
          }
          else
          {
            localStorage.setItem('userId', address.userId);
            this.setState({
              address:address,
              loading:true
            })
          }
        })
        .catch((err)=>{
          console.log(JSON.stringify(err))
        })
      }
    


    render() {

      if(this.state.loading === true){
        return(
          window.location.href ="http://localhost:3001/testtxn"
        )
      }
      else
      {

    return (

       <div className="pym">
         <hr/>
      <div className="container">
      <div className="col-md-12  col-sm-12  col-xs-8 " >
      <h2 className="text-center">Enter Receipent Address</h2>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <h3 className="text-center">Billing Address</h3>
        
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input ref="fullName" type="text" name="fullName" id="fullName" className="form-control input-sm" placeholder="Full Name" />
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input  ref="surName" type="text" name="surName" id="surName" className="form-control input-sm" placeholder="Sur Name" />
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input ref="mail" type="text" name="mail" id="mail" className="form-control input-sm" placeholder="mail" />
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input ref="mobile" type="text" name="mobile" id="mobile" className="form-control input-sm" placeholder="Mobile no" />
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input  ref="door" type="text" name="door" id="door" className="form-control input-sm" placeholder="Door Number" />
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input type="text" ref="lane" name="lane" id="lane" className="form-control input-sm" placeholder="Lane" />
            </div>
          </div>
        
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="form-group">
              <input type="text" ref="country" name="country" id="country" className="form-control input-sm" placeholder="Country" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="form-group">
              <input type="text"ref="city"  name="city" id="city" className="form-control input-sm" placeholder="City" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="form-group">
              <input type="text" ref="pincode" name="pincode" id="pincode" className="form-control input-sm" placeholder="Pincode" />
            </div>
            
          </div>
         {/* <input type="checkbox" id="checkbox" name="same" onClick="FillBilling(this.form)" />
<em>Check this box if Billing Address and Shipping Address are the same.</em> */}

        </div>
        
        <div className="col-md-6 shipping col-sm-6 col-xs-12">
          <h3 className="text-center">Shipping Address</h3>
        
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input type="text" ref="fullName1" id="first_name1" className="form-control input-sm" placeholder="Full Name" />
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input type="text" ref="surName1" id="last_name1" className="form-control input-sm" placeholder="Sur Name" />
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input type="text" ref="mail1" id="country1" className="form-control input-sm" placeholder="mail" />
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input type="text" ref="mobile1" id="mobile1" className="form-control input-sm" placeholder="Mobile no" />
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input type="text" ref="door1" id="mobile1" className="form-control input-sm" placeholder="Door Number" />
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="form-group">
              <input type="text" ref="lane1" id="mobile1" className="form-control input-sm" placeholder="Lane" />
            </div>
          </div>         
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="form-group">
              <input type="text" ref="country1" id="country1" className="form-control input-sm" placeholder="Country" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="form-group">
              <input type="text" ref="city1" id="city1" className="form-control input-sm" placeholder="City" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="form-group">
              <input type="text" ref="pincode1" id="pincode1" className="form-control input-sm" placeholder="Pincode" />
            </div>
          </div>
          
        </div> 
        <div className="col-md-12">
                <button onClick={this.address} className="btn btn-primary pull-right">
            Proceed to Payment
          </button>
        </div>
      </div>
      
    </div>
    <br/>
    </div>

    );
}
}
}

export default Address;
