'use strict'

const router = (requires) => {
    let _routes = [];
    requires.keys().forEach(key => {
        let cacheKey = key.match(/\.\/(.*)\.js/)[1];
        _routes[cacheKey] = requires(key).default;
        if (/\//.test(cacheKey)) {
            _routes[cacheKey].parent = cacheKey.match(/(.*)\//)[1];
        }
    });
    for (let key in _routes) {
        if (!_routes[key].parent) continue;
        _routes[_routes[key].parent].children = _routes[_routes[key].parent].children || [];
        _routes[_routes[key].parent].children.push(_routes[key]);
    }
    return _routes;
}

const js = (requires) => {
    let _js = [];
    requires.keys().forEach(key => {
        let cacheKey = key.match(/\.\/(.*)\.js/)[1].replace(/\//g, '_');
        _js[cacheKey] = requires(key).default;
    });
    return _js;
}

module.exports = {
    router: router,
    js: js
}
