const express = require('express');
let app = express();

app.use(express.static( 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')

app.get("/", (req,res) => {
    res.render("index.html");
})

app.listen(3030, () => {
    console.log("Server now hosting on PORT:3030");
})