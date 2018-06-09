import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom'

class SignIn extends Component {
  constructor(props){
    super(props);
  }

  Signin(){
      var userName = this.refs.userName1.value
      var password  = this.refs.password1.value
      var formBody = [];
  
      var formBody="userName=" + userName + "&password=" + password
    fetch('/api/user/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
      .then((response) => response.json())
      .then((status) => {
        if (status._id !== '') {
         var user=JSON.stringify(status.userName);
         var user_id= JSON.stringify(status._id);
          localStorage.setItem("username",user);
          localStorage.setItem("id",user_id)
          window.location.href = "/dashboard"
        }
        else {
          alert("Failed to submit" + JSON.stringify(status))
        }
      })
      .catch((err) => {
        alert("SignIn with correct credentials or SignUp first")
      })
  }
      render() {
              return (
             <main>
             
        <a className="dropdown-toggle" href="#" data-toggle="dropdown"><b>Sign In</b><strong className="caret" /></a>
        <div className="dropdown-menu" style={{padding: 20, paddingBottom: 14}}>
          <div >
            <input ref="userName1" style={{marginBottom: 15}} type="text" placeholder="  Username"   required/>
            <span></span>
            </div>
            <div>
            <input ref="password1" style={{marginBottom: 15}} type="password" placeholder="  Password"   required />
            <span></span>
           </div>
     <button className="btn btn-primary btn-block" onClick={this.Signin.bind(this)} type="submit" id="signin">Sign In</button>
          </div>
        </main>
          
    );
}
}    


export default SignIn;