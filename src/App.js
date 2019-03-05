import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

// Containers
import Todo from './containers/Todo'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          <div style={{display: 'flex'}}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hello, Active Fox ❤
            </p>
          </div>
            <div style={{display: 'flex'}}>
              <p className="link"><Link to='/todo'>Todo</Link></p>
              <p className="link"><Link to='/fetch'>Fetch</Link></p>
            </div>
          </header>
          <Switch>
            <Route exact path="/" component={() => <h1>Halo ini home</h1>} />
            <Route path="/todo" component={Todo} />
            <Route exact path="/todorender" render={() => <Todo name="activefox"/>} />
            <Route exact path="/param/:name/:hehe" component={(props) => <h1>halo kamu {props.match.params.name} {props.match.params.hehe} </h1>} />
            <Route render={(props ) => <h3>cari apa cuuuy</h3>} />
          </Switch>
          {/* <Todo /> */}
        </div>

      </Router>
    );
  }
}

export default App;
