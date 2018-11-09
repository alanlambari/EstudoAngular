"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.Users = {
    "alanlambari@gmail.com": new User('alanlambari@gmail.com', 'Alan', 'alan123'),
    "rafaela@gmail.com": new User('rafaela@gmail.com', 'Rafaela', 'rafaela123')
};
