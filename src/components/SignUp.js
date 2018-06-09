import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom'

class SignUp extends Component {
  constructor(props){
    super(props);
   
}
  Signup(){
      var firstName  = document.getElementById("firstName").value
      var lastName = document.getElementById("lastName").value
      var email  = document.getElementById("email").value
      var phone = document.getElementById("phone").value
      var userName = document.getElementById("userName").value
      var password  =document.getElementById("password").value
      var confirmPassword = document.getElementById("cpassword").value
        var formBody = [];
        formBody.push("firstName=" + encodeURIComponent(firstName));
        formBody.push("lastName=" + encodeURIComponent(lastName));
        formBody.push("email=" + encodeURIComponent(email));
        formBody.push("phone=" + encodeURIComponent(phone));
        formBody.push("password=" + encodeURIComponent(password));
        formBody.push("userName=" + encodeURIComponent(userName));
         formBody.push("confirmPassword=" + encodeURIComponent(confirmPassword));
        formBody = formBody.join("&");

         console.log(JSON.stringify(formBody)+"status")
        //do fetch call
        fetch('/api/user/register',{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        })
        
          .then((response)=>response.json())
          .then((status)=>{
       

  
              if(status.userName!=''){
                  window.location.href="/"
                  alert("Please, SignIn to continue")
                
              }
              else
              {
                  alert("Failed to submit" + JSON.stringify(status))
              }
          })
          .catch((err)=>{
              alert("Error to submit: " + JSON.stringify(err))
          })
        }


render() {
    
      return (
       
          <div>
              
        <a className="dropdown-toggle" href="#" data-toggle="dropdown"><b>Sign Up</b><strong className="caret" /></a>
        <div className="dropdown-menu" style={{padding: 10, paddingBottom: 14}}>
          <div className="frm " id="myForm"  >
          <div>
            <input ref="firstName" style={{margin: 15}} type="text" placeholder=" First Name" id="firstName"   />
            <span id="error_name" className="text-danger"></span>
        </div>
        <div>
           <input ref="lastName" style={{margin: 15}} type="text" placeholder=" Last Name" id="lastName"  />
           <span id="error_lname" className="text-danger"></span>
        </div>
        <div>
            <input  ref="email" style={{margin: 15}} type="text" id="email" placeholder=" Email Address" />
            <span id="error_email" className="text-danger"></span>
           </div>
           <div>
            <input ref="phone" style={{margin: 15}} type="text"   placeholder=" Phone number" id="phone"   />
            <span id="error_phone" className="text-danger"></span>
           </div>
           <div>
            <input ref="userName" style={{margin: 15}} type="text" placeholder=" User Name" id="userName"   />
            <span id="error_username" className="text-danger"></span>
           </div>
           <div>
            <input ref="password" style={{margin: 15}} type="password" placeholder=" Password" id="password"   />
            <span id="error_password" className="text-danger"></span>
          </div>
          <div>
          <input ref="confirmPassword" style={{margin:10}} type="password" id="cpassword" placeholder=" Confirm Password"  />
          <span id="error_cpassword" className="text-danger"></span>
          </div>
          
             <button className="btn btn-primary btn-block"  onClick={this.Signup.bind(this)} type="submit" id="submit" >Sign Up</button>
          </div>
        </div>
        </div>
    );
}

}

export default SignUp;