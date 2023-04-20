import React, {Component} from 'react';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// import { Switch, Route } from 'react-router-dom';


import Home from './Home';
import Ewaste from './Ewaste';
import Battery from './Battery';
import Other from './Other';
import About from './About';

// App.jsx is not 'actually necessary' but it follows accepted react architecture by always having an App.jsx main renderer
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };


  }

  render() {
    return(


        <Router history={hashHistory} >
          <IndexRoute component={Home} />

          <Route path = "/" component={Home}/>
          <Route path = "/battery" component={Battery} />
          <Route path = "/ewaste" component={Ewaste} />
          <Route path = "/other" component={Other} />
          <Route path = "/about" component={About} />




        </Router>
    );
  }
}


export default App
