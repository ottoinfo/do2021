/* Redirect for Bad URLS - Unknown Routes
 * Ex: server.use('*', unknownRouteMiddleware)
 */

const Template = require('../template');

const unknownRouteMiddleware = async (req, res, next) => {
    res.send(Template(`<h1>Unknown Route</h1>`))
}

module.exports = unknownRouteMiddleware