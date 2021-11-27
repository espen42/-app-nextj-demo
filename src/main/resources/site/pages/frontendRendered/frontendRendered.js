var proxy = require('/lib/frontend-proxy/proxy');

var connectionConfig = require('/lib/frontend-proxy/connection-config');
var FROM_XP_PARAM = connectionConfig.FROM_XP_PARAM;
var FROM_XP_PARAM_VALUES = connectionConfig.FROM_XP_PARAM_VALUES;

exports.get = function (req) {

                                                                                                                        log.info(`---------------------\n\n-------------- FrontendRendered controller!\nUrl: ${req.path}\nmode: ${req.mode}`);

    req.headers = req.headers || {};
    req.headers[FROM_XP_PARAM] = FROM_XP_PARAM_VALUES.PAGE;

    return proxy.get(req);
}



