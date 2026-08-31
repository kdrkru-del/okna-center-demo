const https = require('https');
const fs = require('fs');

const url = 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-and-buildings-11-large.mp4';
const file = fs.createWriteStream("bg.mp4");

const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
};

https.get(url, options, function(response) {
    if(response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, options, function(redirectResponse) {
             redirectResponse.pipe(file);
             file.on('finish', function() {
                 file.close();
                 console.log("Downloaded successfully from redirect");
             });
        });
    } else {
        response.pipe(file);
        file.on('finish', function() {
            file.close();
            console.log("Downloaded successfully");
        });
    }
}).on('error', function(err) {
    fs.unlink("bg.mp4", () => {});
    console.error("Error: ", err.message);
});
