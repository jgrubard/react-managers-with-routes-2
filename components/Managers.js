import React from 'react';

const Managers = (props) => {
  const managers = props.managers
  return (
    <ul>
      {
        managers.map(manager => (
          <li key={manager.id}>
            <strong>{manager.name}</strong> manages:
            <ul>
              {
                manager.manages.map(employee => {
                  return (
                    <li key={employee.id}>
                      {employee.name}
                    </li>
                  )
                })
              }
            </ul>
          </li>
        ))
      }
    </ul>
  )
}

export default Managers;
