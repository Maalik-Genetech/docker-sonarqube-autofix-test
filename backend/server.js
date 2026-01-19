const express = require("express");
const mysql = require("mysql");
const app = express();

// ❌ Hardcoded DB password
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password123",
    database: "users"
});

// ❌ SQL Injection vulnerability
app.get("/user", (req, res) => {
    const userId = req.query.id;
    const query = "SELECT * FROM users WHERE id = " + userId;

    db.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// ❌ No input validation
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    res.send("Logged in as " + username);
});

// ❌ Debug mode enabled
app.get("/debug", (req, res) => {
    res.send(process.env);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
