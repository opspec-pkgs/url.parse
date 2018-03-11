const { URL } = require('url');
const fs = require('fs');

const urlObject = new URL(fs.readFileSync('/url'));

const searchParams = {};
for (const [name, value] of urlObject.searchParams) {
  searchParams[name] = value;
}

const url = {
  origin: urlObject.origin,
  protocol: urlObject.protocol,
  username: urlObject.username,
  password: urlObject.password,
  host: urlObject.host,
  hostname: urlObject.hostname,
  port: urlObject.port,
  pathname: urlObject.pathname,
  search: urlObject.search,
  searchParams,
  hash: urlObject.hash,
};

fs.writeFileSync('/url', JSON.stringify(url));