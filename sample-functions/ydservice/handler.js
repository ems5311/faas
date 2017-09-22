"use strict"

const fs = require('fs');
const ytdl = require('ytdl-core');

module.exports = function(context, callback) {
    ytdl(context) 
      .pipe(process.stdout);
}
