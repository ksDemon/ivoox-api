const express = require("express");
const app = express();
var cors = require('cors');
const ivoox = require('node-ivoox');

app.use(cors());

let port = process.env.PORT || 3000;

var allData = []
var page = 1
var prev = 0

readPages(page)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

function readPages(page){
    ivoox.audios(`https://www.ivoox.com/podcast-viaje-al-mundo-del-jazz_sq_f11234707_${page}.html`).then(function(data) {
        prev = allData.length
            addData(data);
            if (prev == allData.length){
                app.get("/", (req, res) => {
                    res.send(allData)
                })
            }
            else {
                page = page + 1;
                readPages(page)
            } 
        });
}

function addData(data){
    allData = allData.concat(data);
    return allData;
}
