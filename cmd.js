const url = require('url');
const fs = require('fs');

const urlObject =  url.parse(fs.readFileSync('/url').toString());
fs.writeFileSync(JSON.stringify(urlObject));