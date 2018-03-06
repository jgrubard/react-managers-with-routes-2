import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import Employees from './Employees';
import Managers from './Managers';

const Home = () => <div>Home Page</div>

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
      .then(employees => {
        let managers = employees.filter(manager => {
          return manager.manages.length
        })
        this.setState({ employees, managers })
      })
      .catch(err => console.error(err))
  }

  render() {
    const employees = this.state.employees;
    const managers = this.state.managers;
    return (
      <Router>
        <div>
          <h1>Acme Employees & Managers REACT</h1>
          <Route component={({ location }) => <Nav location={location} employees={employees} managers={managers}/>} />
          <Route exact path='/' component={Home} />
          <Route path='/employees' component={() => <Employees employees={employees} />} />
          <Route path='/managers' component={() => <Managers managers={managers} />} />
        </div>
      </Router>
    );
  }
}

export default App;
//
