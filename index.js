const fs = require('fs');
 

exports.themeVersion = function () {

    // Open file demo.txt in read mode
    fs.open('style.css', 'r', function (err, f) {
        if (err) {
            return console.error(err);
        }
        console.log(f);
        console.log("File opened!!");
    });

    // console.log( "Theme Version" );
}