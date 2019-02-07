/// <reference path="globals.d.ts" />
var Utility = (function () {
    function Utility() {
    }
    Utility.displayGlobalVar = function () {
        console.log(globalVar);
    };
    return Utility;
}());
window.onload = function () {
    Utility.displayGlobalVar();
};
