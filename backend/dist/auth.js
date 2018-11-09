"use strict";
exports.__esModule = true;
var users_1 = require("./users");
var jwt = require("jsonwebtoken");
var api_config_1 = require("./api-config");
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isvalid(user)) {
        var dbUser = users_1.Users[user.email];
        var token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, api_config_1.apiConfig.secrect);
        resp.json({ name: dbUser.name, email: dbUser.email, accessToken: token });
    }
    else {
        resp.status(403).json({ message: 'Dados inválidos' });
    }
};
function isvalid(user) {
    if (!user) {
        return false;
    }
    var dbUser = users_1.Users[user.email];
    return dbUser !== undefined && dbUser.matches(user);
}
