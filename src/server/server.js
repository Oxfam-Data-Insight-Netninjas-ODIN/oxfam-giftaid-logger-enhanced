const express = require('express');
const bodyParser = require('body-parser');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Import usernames from CSV file
app.post('/import', (req, res) => {
  const usernames = [];

  fs.createReadStream('usernames.csv')
    .pipe(csv())
    .on('data', (data) => usernames.push(data.username))
    .on('end', () => {
      // Process usernames
      res.json({ success: true, usernames });
    });
});

// Export usernames to CSV file
app.get('/export', (req, res) => {
  const usernames = ['user1', 'user2', 'user3']; // Example usernames

  const csvData = usernames.map(username => ({ username }));

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="usernames.csv"');
  res.csv(csvData, { header: true });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});