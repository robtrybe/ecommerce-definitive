
const config = {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: "mysql",
    dialectOptions: {
      timezone: 'Z'
    }
};

module.exports = {
  development: config,
  production: config,
  test: config
}