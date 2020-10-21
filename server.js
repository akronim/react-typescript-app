const express = require("express");
const jsonServer = require("json-server");
const history = require("connect-history-api-fallback");

const app = express();
app.use(history());
app.use("/", express.static("build"));

const router = jsonServer.router("data.json");
app.use(jsonServer.bodyParser);
app.use("/api", (req, resp, next) => router(req, resp, next));

const port = process.argv[3] || 4002;
app.listen(port, () => console.log(`Running on port ${port}`));


/* 
The statements in the server.js file configure the express and json-server 
packages so they use the contents of the build folder, which is where the React 
build process will put the application’s JavaScript bundles and the HTML file 
that tells the browser to load them. 
URLs prefixed with /api will be handled by the web service.
*/