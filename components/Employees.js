import React from 'react';

const Employees = (props) => {
  const employees = props.employees;
  return (
    <ul>
      {
        employees.map(employee => (
          <li key={employee.id}>
            {employee.name}
            {employee.manager}
          </li>
        ))
      }
    </ul>
  )
}

export default Employees;
