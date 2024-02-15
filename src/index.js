const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/add', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Invalid input. Please provide valid numbers.');
        return;
    }

    const result = num1 + num2;
    res.send(result.toString());
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});