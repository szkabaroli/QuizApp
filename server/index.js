import express from 'express';

let app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8080, () => console.log('We are running on localhost:8080'));