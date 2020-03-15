const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
 
app.use(express.json());

app.use(express.static(__dirname));

app.use(express.static('public'));

const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});
 
app.get("/frontpage", (req, res) => {
  return res.sendFile(__dirname + "/public/frontpage.html") 
});

app.get("/jquery", (req, res) => {
    return res.sendFile(__dirname + "/public/jquery.html")
});

app.get("/npm", (req, res) => {
    return res.sendFile(__dirname + "/public/npm.html")
});

app.get("/js", (req, res) => {
    return res.sendFile(__dirname + "/public/js.html")
});

app.get("/keatube", (req, res) => {
    return res.sendFile(__dirname + "/public/keatube.html")
});


