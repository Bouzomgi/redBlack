const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

// Health check route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the micro server version 1");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
