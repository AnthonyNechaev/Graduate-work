const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/table.html`);
});
app.listen(8080, () => {
    console.log('Application listening on port 8080');
});