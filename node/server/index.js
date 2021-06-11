const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("./middleware/logger");
const unknownRouteMiddleware = require("./middleware/unknownRoute");
const Template = require('./template');

const server = express();
server.use(cookieParser());
server.use(
  require("morgan")(dev ? "tiny" : "combined", {
    stream: logger.stream,
    skip(req, res) {
      return req.path.search(/_next.*/) > -1;
    }
  })
);
server.use(express.static('public'))
server.get("/", (req, res) =>
  res.send(Template(`<h1>Hello World, welcome to my site!</h1>`))
);
// Redirect for Bad URLS - Unknown 
server.use('*', unknownRouteMiddleware)
// Server
server.listen(port, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line
});
