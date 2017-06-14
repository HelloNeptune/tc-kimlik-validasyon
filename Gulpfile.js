
/**
 * 
 *  The dependencies
 */
const gulp = require( 'gulp' )
    , livereload = require( 'gulp-server-livereload' );

/**
 * 
 *  Variables
 */
const watchfiles = [ './src/tckvalid.js', './src/index.html' ]
    , serveropts = { livereload: true, open: true }
    , serverport = 8181;



/**
 * @desc
 *
 * [ Gulp task: start-reload-server ]
 */
gulp.task( 'start-reload-server', () => {

    // Start livereload server
    // #
    gulp.src( './src' )
        .pipe(livereload( serveropts ));
});

/**
 * @desc It's default task of gulp automation
 *
 * [ Gulp task: default ]
 */
gulp.task( 'default', () => {

    console.log( "Gulp working perfectly! ");
});