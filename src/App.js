import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

// store
import {Provider} from 'react-redux'
import store from './store'

// Containers
import Todo from './containers/Todo'
import Navbar from './containers/Navbar'
import Manipulate from './containers/ManipulatingTitle'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={() => <h1>Halo ini home</h1>} />
              <Route path="/todo" component={Todo} />
              <Route path="/manipulate" component={Manipulate} />
              <Route exact path="/todorender" render={() => <Todo name="activefox"/>} />
              <Route exact path="/param/:name/:hehe" component={(props) => <h1>halo kamu {props.match.params.name} {props.match.params.hehe} </h1>} />
              <Route render={(props ) => <h3>cari apa cuuuy</h3>} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
