const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend server is running!");
});

app.get("/api/materials", (req, res) => {
    res.json({
        message: "Materials API is working",
        materials: []
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});