const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const app = express()

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if(err){
        console.log("MYSQL database connection failed:", err.message);
    } else {
        console.log("MYSQL database connection successful");
    }
});

app.get("/", (req, res) => {
  res.send("Root route works");
});

app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    if(!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please fill in all fields.",
        });
    }
    
    const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.log("Insert failed:", err.message);
            return res.status(500).json({
                success: false,
                message: "Failed to save message.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Message saved!",
        });
    });
});

app.get("/api/contacts", (req, res) => {
    const sql = "SELECT * FROM contacts";

    db.query(sql, (err, result) => {
        if(err) {
            return res.status(500).json({
                success: false,
                message: "Failed to fetch contacts.",
            });
        }
        
        res.json(result);
    });
});

app.delete("/api/contacts/:id", (req, res) => {
    const id = req.params.id;
    
    const sql = "DELETE FROM contacts WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to delete message.",
            });
        }

        res.json({
            success: true,
            message: `Message with id ${id} deleted`,
        });
    });
});

app.put("/api/contacts/:id", (req, res) => {
    const id = req.params.id;
    const { name, email, message } = req.body;

    if(!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please fill in all fields.",
        });
    }

    const sql = `
        UPDATE contacts
        SET name = ?, email = ?, message = ?
        WHERE id = ?
        `;

    db.query(sql, [name, email, message, id], (err, result) => {
        if(err) {
            return res.status(500).json({
                success: false,
                message: "Failed to updated message.",
            });
        }

        if(result.affectedRows == 0) {
            return res.status(404).json({
                success: false,
                message: "No message found with that id",
            });
        }

        res.json({
            success: true,
            message: `Message with id ${id} updated`,
        });
    });
});

app.listen(process.env.PORT || 5000, () =>{
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});