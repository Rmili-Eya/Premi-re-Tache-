import React , {Component}from 'react';
import './App.css'
import Home from './Pages/Home';
import {Entrepreneur} from  './Pages/Entrepreneur';
import {Expert} from './Pages/Expert';
import {SignIn} from './Pages/SignIn';
import {SignUp} from './Pages/SignUp';
import {Nomatch} from './Pages/Nomatch';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';



function App() {
  return (
    <React.Fragment>
   
   <Router>
     <Switch>
       <Route exact  path="/" component={Home} />
       <Route path="/Entrepreneur" component={Entrepreneur} />
       <Route path="/Expert" component={Expert} />
       <Route exact path="/SignIn"  component={SignIn} />
       <Route exact path="/SignUp"  component={SignUp} />
       <Route  component={Nomatch} />
     </Switch>
    </Router>
   </React.Fragment>
  );
}

export default App;

