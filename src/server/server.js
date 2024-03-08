const express = require("express");
const app = express();

// This is the endpoint to get cashiers data
app.get("/api/cashiers", (req, res) => {
  // We will add logic to fetch cashiers data from the database
  const cashiers = [];
  res.json(cashiers);
});

// This will start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
