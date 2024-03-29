const express = require('express');
const path = require('path');
const app = express();


app.set('views', path.join(__dirname, './templates/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, './templates/views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log("Server running on Port : 3000");
})