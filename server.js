var ivoox = require('node-ivoox');

ivoox.audios("https://www.ivoox.com/podcast-viaje-al-mundo-del-jazz_sq_f11234707_1.html").then(function(data) { console.log(data) }).catch(function(e) { console.error(e); });