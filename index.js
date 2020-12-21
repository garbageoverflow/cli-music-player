// requirements
const Audic = require("audic");
var mp3Duration = require('mp3-duration');
const colors = require('colors');

// native modules
var fs = require('fs');

var a = process.argv[2];
var b = process.argv[3];
var c = process.argv[4];
var d = process.argv[5];
var dir = './music/';

if (a === "add") {
    fs.rename(b, c, function (err) {
        console.log(`${'[Music Player]'.yellow} Added ${b}`);
        console.log(`${'[Music Player]'.yellow} Moved "${b}" to "${c}"`);
        if (err) {
            throw err
        }
    });
    process.exit()
} else if (a === "list") {
    console.log(`${'[Music Player]'.yellow} Listing all music`);
    fs.readdir(dir, (err, files) => {
        console.log(`${'[Music Player]'.yellow} ${files.length}`);
        if (err) {
            throw err;
        }

        files.forEach(file => {
            var filename = file
            console.log('-- '.yellow + `"${filename}"`.green);
        });
    });
} else {
    console.log(`${'[Music Player]'.yellow} Now Playing` + ` ${a}`.green);
    console.log(`${'[Music Player]'.yellow} Type:` + ` ${b}`.green);
    mp3Duration(`./music/${a}.${b}`, function (err, duration) {
        if (err) return console.log(err.message);
        console.log(`${'[Music Player]'.yellow} Duration: ` + `${duration}`.green + 's'.green);
    });

    new Audic(`./music/${a}.${b}`).play();    
};