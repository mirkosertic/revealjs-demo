const express = require('express');
const path = require('path');
const yargs = require('yargs')

const revealRunInTerminal = require('reveal-run-in-terminal');

const port = yargs.argv.port || 5000

let app = express();

app.use(revealRunInTerminal({
    publicPath: __dirname,
    commandRegex: /node|ruby/,
    log: true,
    allowRemote: true
}));

let revealJsPath = path.resolve(__dirname, './node_modules/reveal.js');
app.use(express.static(revealJsPath));

console.log("* Demo-Server is listening on port %d", port);
console.log("* Open the presentation by visiting http://localhost:%d", port);
app.listen(port);
