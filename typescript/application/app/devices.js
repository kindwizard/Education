"use strict";
exports.__esModule = true;
var Phone = (function () {
    function Phone(n) {
        this.name = n;
    }
    return Phone;
}());
exports.Phone = Phone;
function Call(phone) {
    console.log("Make a call by", phone.name);
}
exports.Call = Call;
