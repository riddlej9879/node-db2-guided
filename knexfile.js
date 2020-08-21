module.exports = {
  client: "sqlite3", // specifying the DBMS
  useNullAsDefault: true, // a flag that is specific to SQLite
  connection: {
    filename: "./data/produce.db3", // location of our database file
  },
};
