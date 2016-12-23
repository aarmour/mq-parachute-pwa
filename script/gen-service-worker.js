const path = require('path');
const swPrecache = require('sw-precache');

const rootDir = path.resolve(__dirname, '../dist');

swPrecache.write(path.resolve(__dirname, '../src/service-worker.js'), {
  staticFileGlobs: [`${rootDir}/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}`],
  stripPrefix: rootDir
}, (err) => {
  if (err) console.error(err);
});
