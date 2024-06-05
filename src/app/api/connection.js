const oracledb = require("oracledb");

async function getConnection() {
  try {
    let connection = await oracledb.getConnection({
      user: "ecommerce",
      password: "ecommerce",
      connectionString: "//localhost:1521/global_oracle",
    });
    return connection;
  } catch (error) {
    console.error("Error establishing connection", error);
  }
}

module.exports = { getConnection };
