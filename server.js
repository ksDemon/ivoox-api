const express = require("express");
const app = express();
var cors = require('cors');
const ivoox = require('node-ivoox');

app.use(cors());

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    ivoox.audios("https://www.ivoox.com/podcast-viaje-al-mundo-del-jazz_sq_f11234707_1.html").then(function(data) { res.send(data) }).catch(function(e) { console.error(e); });
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})