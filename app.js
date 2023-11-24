const express = require('express');
const app = express();
const port = 7000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <style>
            body { background-color: #fafafa; font-family: Arial, sans-serif; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            form { background-color: #fff; border-radius: 5px; padding: 20px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); }
            input[type="text"] { width: 100%; padding: 10px; margin-bottom: 10px; border-radius: 5px; border: 1px solid #ccc; }
            input[type="submit"] { width: 100%; padding: 10px; color: #fff; background-color: #007BFF; border: none; border-radius: 5px; cursor:pointer; }
        </style>
        <div class="container">
            <form action="/submit" method="post">
                <label for="name">Name:</label><br>
                <input type="text" id="name" name="name"><br>
                <label for="food">Best Food:</label><br>
                <input type="text" id="food" name="food"><br>
                <input type="submit" value="Submit">
            </form>
        </div>
    `);
});


app.post('/submit', (req, res) => {
    const { name, food } = req.body;
    res.send(`Your name is ${name} and your best food is ${food}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
