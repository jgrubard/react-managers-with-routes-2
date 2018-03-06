import React from 'react';

const Employees = (props) => {
  const employees = props.employees;
  return (
    <ul>
      {
        employees.map(employee => {
          let manager = employee.manager ? (
            ` is managed by ${employee.manager.name}`
          ) : (
            ''
          );
          return (
            <li key={employee.id}>
              <strong>{employee.name}</strong>{manager}
            </li>
          )
        })
      }
    </ul>
  )
}

export default Employees;
