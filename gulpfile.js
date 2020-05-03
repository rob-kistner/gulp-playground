const { src, dest, watch, parallel, series, done } = require('gulp'),
      clipboard = require('gulp-clipboard')
      browserSync = require('browser-sync');

const dist = 'dist';
const source = 'src';

// gulp-clipboard test
function testclipboard() {
  return src(source + '/html/test.html')
    .pipe(clipboard())
}

// start the browser-sync server
function startServer() {
  browserSync.init({
    server: {
      baseDir: dist,
    },
    ui: {
      port: 8080
    },
    notify: false
  })
}

function watchers() {
  startServer();

  // watch(source + 'html/**/*', [html]); // or nunjucksHtml
  // watch(source + 'js/**.*', [jss]);
  // watch(source + 'scss/**/*', [scss]);

  watch('dist/**/*.*').on('change', browserSync.reload);
}

exports.testCB = testclipboard;
// exports.html = html;
// exports.js = js;
// exports.scss = scss;
// exports.images = images;
exports.watchers = watchers;

// exports.default = series(parallel(), watchers);
exports.default = watchers;