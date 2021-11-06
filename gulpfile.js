const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css(done){
    src('assets/scss/app.scss')
    //.pipe( sass({outputStyle:'expanded'}) )
    .pipe( sass() )
    .pipe( postcss([ autoprefixer() ]) )
    .pipe( dest('assets/css') );
    done();
}

function dev() {
    watch('assets/scss/**/*.scss', css);
    watch('assets/scss/app.scss', css);
}

exports.css     = css;
exports.dev     = dev;
exports.default = series(css, dev);