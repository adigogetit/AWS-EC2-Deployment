
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_VERSION = "1.0.0";
const YOUR_NAME = "Aditya Kumar Singh";

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cloud Deployment Lab</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f1f5f9;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin: 0;
                }
                .card {
                    background: white;
                    padding: 40px;
                    border-radius: 16px;
                    text-align: center;
                    box-shadow: 0 8px 24px #00000015;
                }
                h1 { color: #2563eb; }
                p { color: #334155; font-size: 18px; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Welcome to My Cloud Application!</h1>
                <p><strong>Name:</strong> ${YOUR_NAME}</p>
                <p><strong>Application Version:</strong> ${APP_VERSION}</p>
                <p>Deployed using GitHub, Docker, and AWS EC2.</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
});
