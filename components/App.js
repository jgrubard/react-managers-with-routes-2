import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import Employees from './Employees';
import Managers from './Managers';

const Home = () => <div>Home</div>

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      managers: []
    }
  }

  componentDidMount() {
    axios.get('/api/employees')
      .then(result => result.data)
      .then(employees => this.setState({ employees }))
      .catch(err => console.error(err))
  }

  render() {
    const employees = this.state.employees;
    const managers = this.state.managers;
    // console.log(employees, managers);
    return (
      <Router>
        <div>
          <h1>Acme Employees & Managers REACT</h1>
          <Route component={({ location }) => <Nav location={location} employees={employees} managers={managers}/>} />
          <Route exact path='/' component={Home} />
          <Route path='/employees' component={() => <Employees employees={employees} />} />
          <Route path='/managers' componenet={() => <Managers managers={managers} />} />
        </div>
      </Router>
    );
  }
}

export default App;
//
