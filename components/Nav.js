import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const path = props.location.pathname;
  const employees = props.employees;
  const managers = props.managers;
  return (
    <ul>
      <li>
        {path === '/' ? (
          <span>Home</span>
        ) : (
          <Link to='/'>Home</Link>
        )}
      </li>
      <li>
        {path === '/employees' ? (
          <span>Employees: {employees.length}</span>
        ) : (
          <Link to='/employees'>Employees: {employees.length}</Link>
        )}
      </li>
      <li>
        {path === '/managers' ? (
          <span>Managers: {managers.length}</span>
        ) : (
          <Link to='/managers'>Managers: {managers.length}</Link>
        )}
      </li>
    </ul>
  );
}

export default Nav;
