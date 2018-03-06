const { _conn, Sequelize } = require('./conn');
const Employee = require('./Employee')

const sync = () => {
  return _conn.sync({ force: true })
}

const seed = () => {
  return Promise.all([
    Employee.create({ name: 'Mario'}),
    Employee.create({ name: 'Luigi'}),
    Employee.create({ name: 'Peach'}),
    Employee.create({ name: 'Bowser'}),
    Employee.create({ name: 'Wario'}),
  ])
  .then(([Mario, Luigi, Peach, Bowser, Wario]) => {
    return Promise.all([
      Wario.setManager(Bowser),
      Mario.setManager(Peach),
      Luigi.setManager(Peach)
    ])

  })
}

module.exports = {
  sync,
  seed
}
