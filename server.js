const express = require("express");
const app = express();
const ivoox = require('node-ivoox');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
};

app.configure(function() {
    app.use(allowCrossDomain);
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(application_root, "public")));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});



let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    ivoox.audios("https://www.ivoox.com/podcast-viaje-al-mundo-del-jazz_sq_f11234707_1.html").then(function(data) { res.send(data) }).catch(function(e) { console.error(e); });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})