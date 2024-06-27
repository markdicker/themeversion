/*
 * Copyright : Mark Dicker 2024
 */

const fs = require('fs');

const version_regex = /^[ \t\/*#@]*Version:(.*)$/mi;

// const version_number_regex = /\s*(?:\*\/|\?>).*/;
const version_number_regex = /(?:(\d+)\.)?(?:(\d+)\.)?(?:(\d+)\.\d+)/;

async function themeVersion( filename = 'style.css' ) {
    
    return new Promise((resolve, reject) => {
        
        // Open file and read version number
        fs.readFile( filename, function (err, data) {
            if (err) {
                // console.error(err);
                reject ( err );
            }
            else 
            {
                version = version_regex.exec( data );

                if ( version === null )
                    resolve( 'undefined' );

                // console.log( version[1] )
                version_number = version_number_regex.exec( version[1] );
                
                // console.log( version_number[0] );
                
                if ( version_number === null )
                    resolve( 'undefined' );

                resolve( version_number[0] );
            }
        });
    });

}

exports.getVersion = themeVersion;
