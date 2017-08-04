var fs = require('fs');

function readJSONPromise(filename){
    return new Promise((resolve, reject) => {
        fs.readFile(filename, function handleFile(err, data) {
            if (err) {
                reject([err, filename]);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
};

function writeJSONPromise(filename, json){
    return new Promise((resolve, reject) => fs.writeFile(filename, JSON.stringify(json, null, 2), function(err) {
        if (err) {
            reject(err);
        } else {
            resolve();
        }
    }));
}

var filePromises = [
    'presentations.json',
    'venues.json'
].map(file => readJSONPromise(file).catch(errInfo => console.error("Failed to read file: ", errInfo[1], errInfo[0])))

Promise.all(filePromises)
.then(([presentations, venues]) => {
    return presentations.map(p => {
        if (venues[p.venueId]){
            p.venue = venues[p.venueId];
            delete p.venueId;
        }
        return p;
    });
})
.then(result => {
    writeJSONPromise('data.json', result);
    console.info('data.json file written');
    return result;
});
