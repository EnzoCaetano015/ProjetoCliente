// server.js
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);

app.set('layout', 'layout'); // Define o layout padrão

app.use('/customers', customerRoutes);

app.get('/', (req, res) => {
    res.redirect('/customers');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
