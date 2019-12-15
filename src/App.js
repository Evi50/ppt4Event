import React, {Component,Fragment} from 'react'; 
import './style/styles.css';
import Home from './Home/Home';
import Props from './Props/Props';
import SimpleEvent from './event/SimpleEvent';
// import logo from './logo.svg';
// import './App.css';

import Form from './event/event';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="wraaper">
          <div className="header">
            <div className="navbar">
              <div className="logo">
                <img src={require('./logo/babastudio-logo.png')} className="imgfluid"/>
              </div>
              <div className="menu">
                <ul>
                  <Link to="/" className="li">Home</Link>
                  <Link to="/blogs" className="li">Blogs</Link>
                  <Link to="/blogs" className="li">Gallery</Link>
                  <Link to="/form" className="li">Kontak</Link>
                  {/* <Link to="/event" className="li">Simple Event</Link> */}
                </ul>
              </div>
            </div>
          </div>
          <Fragment>
            {/* <Home/> */}
            <Route path="/" exact component={Home}/>
            <Route path="/blogs" exact component={Props} />
            <Route path="/form" component={Form}/>
            {/* <Route path="/event"  component={SimpleEvent}/> */}
          </Fragment>
        </div>
      </Router>
    );
  }
}

export default App;
