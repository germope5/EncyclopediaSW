const express = require('express');
const cors = require('cors');
const swapiRoutes = require('./routes/swapiRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api/swapi', swapiRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}");
})