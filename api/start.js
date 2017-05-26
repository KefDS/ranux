require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./index');

mongoose.Promise = global.Promise;

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose.connect(process.env.DB).then(
  () => console.log('Connected to MongoDB'),
  error => console.log(`Error to connect with MongoDB.\nDetails: ${error}`)
);
