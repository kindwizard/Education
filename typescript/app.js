var el = this.document.getElementById("content");
function mathOp(x, y, operation) {
    var result = operation(x, y);
    return result;
}
var operationFunc;
operationFunc = function (a, b) {
    return a + b;
};
var result = mathOp(10, 20, operationFunc); // 30 
el.innerHTML = result.toString();
operationFunc = function (a, b) {
    return a * b;
};
result = mathOp(10, 20, operationFunc);
$('<div>' + result.toString() + '</div>').appendTo(el);
