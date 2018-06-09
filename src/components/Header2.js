import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom'

class Header extends Component {
    render() {
      return (
        <section id="header">
        {/* <nav className="navbar  navbar-fixed-top" role="navigation"> */}
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <a className="image-responsive"><img src="images/logo1.jpg" alt="logo" width={100} /></a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="txt"><a href="/dashboard"><span>Home</span></a></li>
                <li><a href="/upload"><span>Greeting Card</span></a></li>
                <li><a href="#"><span>About</span></a></li>
                <li><a href="#"><span>Contact Us</span></a></li>
                <li><a  href="javascript:void(0)"><span className="wlcm"> Welcome {localStorage.getItem("username").slice(1,-1).toUpperCase()}</span></a></li>
               <a href="/"> <button className="btn btn-danger " id="sign-out">Sign Out</button></a>
               </ul>
               </div>
               </div>
                
        
      </section>
  
    );
}
}

export default Header;



// import React, { Component } from 'react';
// import SignUp from './SignUp';
// import {withRouter} from 'react-router-dom';
// import SignIn from './SignIn';
// import {
//   Redirect
// } from 'react-router-dom'

// class Header extends Component {
//   constructor(){
//     super();
//     this.state={
//         firstName:''
//     }
//   }
//     logout(){
//       localStorage.clear()
//       this.props.history.push( '/')
//   }

//     componentWillMount(){
//       var firstname = localStorage.getItem("firstName");
//       console.log(firstname)
//       this.setState({firstName:firstname})
//   }
 
//   render(){
//     if(!localStorage.getItem("userid"))
//     {
//     return(

//       <section id="header">
//         {/* <nav className="navbar  navbar-fixed-top" role="navigation"> */}
//           <div className="container">
//             {/* Brand and toggle get grouped for better mobile display */}
//             <div className="navbar-header">
//               <a className="image-responsive" href="/"><img className="imag"  src="images/logo.png" alt="logo" width={100} /></a>
//             </div>
//             {/* Collect the nav links, forms, and other content for toggling */}
//             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//               <ul className="nav navbar-nav navbar-right">
//                 <li className="txt"><a href="/"><span>Home</span></a></li>
//                 <li><a href="javascript:void(0)"><span>Greeting Card</span></a></li>
                
//                 <li><a href="#"><span>About</span></a></li>
//                 <li><a href="#"><span>Contact Us</span></a></li>
//                 <li className="dropdown">
//                  <SignUp/>
//                 </li>

//                 <li className="dropdown">
//                 <SignIn/> 
//                  </li>
//               </ul>
//             </div>{/* /.navbar-collapse */}
//           </div>{/* /.container-collapse */}
//         {/* </nav> */}
        
//       </section>
  
//     ) 
//   }
//   else{
//     return(
//         <section id="header">
//         {/* <nav className="navbar  navbar-fixed-top" role="navigation"> */}
//           <div className="container">
//             {/* Brand and toggle get grouped for better mobile display */}
//             <div className="navbar-header">
//               <a className="image-responsive"><img src="images/logo.png" alt="logo" width={100} /></a>
//             </div>
//             {/* Collect the nav links, forms, and other content for toggling */}
//             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//               <ul className="nav navbar-nav navbar-right">
//                 <li className="txt"><a href="/"><span>Home</span></a></li>
//                 <li><a href="/upload"><span>Greeting Card</span></a></li>
//                 <li><a href="#"><span>About</span></a></li>
//                 <li><a href="#"><span>Contact Us</span></a></li>
//                 <span className="signin">Welcome  {this.state.firstName}</span>
//                <a href="/"> <button className="btn btn-danger " onClick={this.logout.bind(this)} id="sign-out">Sign Out</button></a>
//                </ul>
//                </div>
//                </div>
                
        
//       </section>
  
//     );
//   }
//   }
// }
// export default withRouter(Header);
