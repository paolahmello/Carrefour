const express = require('express');
const cors = require('cors');
const db = require('./models'); // Load models and initialize Sequelize

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON bodies
const port = 3001;

app.use('/api/addresses', require('./routes/address')); 
app.use('/api/users', require('./routes/user')); 

app.get('/', (req, res) => {
  res.send('Backend Running!');
});

// Test database connection
db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});

module.exports = app;
