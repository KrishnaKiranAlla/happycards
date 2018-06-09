import React, { Component } from 'react';
import './App.css';
import HomePage from './containers/HomePage'
import AddressPage from './containers/AddressPage'
import PaymentPage from './containers/PaymentPage'
import ThankyouPage from './containers/ThankyouPage'
import UploadPage from './containers/UploadPage'
import DesignPage from './containers/DesignPage'
import HeaderPage from './containers/HeaderPage'
import PreviewPage from './containers/PreviewPage'



import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={HomePage}/>
                 <Route exact path="/address" component={AddressPage}/>
                 <Route exact path="/dashboard" component={HeaderPage}/>
                 <Route exact path="/payment" component={PaymentPage}/>
                 <Route exact path="/thankyou" component={ThankyouPage}/>
                 <Route exact path="/upload" component={UploadPage}/>
                 <Route exact path="/design" component={DesignPage}/>
                 <Route exact path="/preview" component={PreviewPage}/>
                      </div>
        </Router>
    );
  }
}


export default App;
