const { _conn, Sequelize } = require('./conn');

const Employee = _conn.define('employee', {
  name: Sequelize.STRING
}, {
  timestamps: false
});

Employee.belongsTo(Employee, { as: 'manager' });
Employee.hasMany(Employee, { as: 'manages', foreignKey: 'managerId' });

module.exports = Employee;
