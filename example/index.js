var fs = require("fs");
const Ntz2html = require("../src/");
const path = require("path");

let ntz = fs.readFileSync(path.resolve(__dirname, "./articles/Der Besuch/index.ntz.json"));
ntz = JSON.parse(ntz);

// parse html to ntz
let ntz2html = new Ntz2html();

fs.writeFileSync(path.resolve(__dirname, "./articles/Der Besuch/index.html"), ntz2html.convert(ntz));
