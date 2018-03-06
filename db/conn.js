const Sequelize = require('sequelize');
const _conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/react_managers_with_routes_2_db');

module.exports = {
  _conn,
  Sequelize
}
