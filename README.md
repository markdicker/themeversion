# themeversion
## Retrieves the version number from a wordpress theme

The idea behind this was to replace some PHP code that did the same thing.  I used the PHP in a bash script to automate building a release zip file.  The bash script worked fine, but I wanted to use something like Gulp to manage the process.  

So I have packaged this as an NPM package and you can install it using 

    npm i themeversion --save-dev


To use in gulp create a task like this

    // gulpfile.js
    const gulp = require('gulp');
    const tv = require( 'themeversion' );

    async function getVersionNumber() {
        try {
            const version = await tv.getVersion( 'styles.css' );
            console.log("Version", version ); // Output: Process completed
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Register the Gulp task
    gulp.task('version', getVersionNumber);


You can do any processing taht needs the version number in the try.

