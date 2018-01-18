const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  debugger;
  res.send('It worked!');
});

app.listen(PORT, () => console.log(`Server is up and running on ${PORT}!! 🎉 😎`));