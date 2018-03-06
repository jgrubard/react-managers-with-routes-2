const { _conn, Sequelize } = require('./conn');
const Employee = require('./Employee')

const sync = () => {
  return _conn.sync({ force: true })
}

const seed = () => {
  return Promise.all([
    Employee.create({ name: 'Mario'}),
    Employee.create({ name: 'Luigi'}),
    Employee.create({ name: 'Bowser'})
  ])
  .then(([Mario, Luigi, Bowser]) => {
    return Promise.all([
      Mario.setManager(Bowser),
      Luigi.setManager(Bowser)
    ])

  })
}

module.exports = {
  sync,
  seed
}
