var proxy = require('/lib/frontend-proxy/proxy');
var FROM_XP_PARAM = require('/lib/frontend-proxy/connection-config').FROM_XP_PARAM;

exports.get = function (req) {

    log.info(`Default controller:\nUrl: ${req.path}\nmode: ${req.mode}`);

    req.headers = {
        ...(req.headers || {}),
        [FROM_XP_PARAM]: "page"
    }
    return proxy.get(req);
}



