# Notzer → ntz2html
Convert a Notzer-File to a HTML-File (InCopy/InDesign).


## install
```sh
npm install notzer.ntz2html --save
```

## usage
```js
var fs = require("fs");
const ntz2html = require("notzer.ntz2html");

let ntz = fs.readFileSync("./data/index.ntz.json");
ntz = JSON.parse(ntz);

// parse ntz to html
let ntz2html = new Ntz2icml();

fs.writeFileSync("./data/index.html", ntz2html.convert(ntz));

```
