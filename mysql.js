const mysql = require("mysql");

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "devuser",
  password: "L;Dx{puenv6+'x,X",
  database: "todo_schema",
});

con.connect((err) => {
  if (err) {
    console.log("Error connecting to Database");
    return;
  }
  console.log("Connection established");
});

// con.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all remaining queries are executed
//   // Then sends a quit packet to the MySQL server.
// });

con.query("SELECT * FROM todos", (err, rows) => {
  if (err) throw err;

  console.log("Data received from Db:");
  console.log(rows);
});

//Reading ex:
// const author = { name: "Craig Buckler", city: "Exmouth" };
// con.query("INSERT INTO todos SET ?", todo, (err, res) => {
//   if (err) throw err;

//   console.log("Last insert ID:", res.insertId);
// });

//Updating
con.query("UPDATE todos SET todo = ? Where ID = ?", (err, result) => {
  if (err) throw err;

  console.log(`Changed ${result.changedRows} row(s)`);
});

// Updating
con.query("UPDATE todos SET todo = ''  WHERE id = ?", (err, result) => {
  if (err) throw err;

  console.log(`Changed ${result.changedRows} row(s)`);
});

//Deleting
con.query("DELETE FROM todos WHERE id = ?", (err, result) => {
  if (err) throw err;

  console.log(`Deleted ${result.affectedRows} row(s)`);
});
