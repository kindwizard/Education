var el = this.document.getElementById("content");

function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number{
 
    let result = operation(x, y);
    return result;
}
let operationFunc: (x: number, y: number) => number;
operationFunc = function (a: number, b: number): number {
    return a + b;
}
let result = mathOp(10, 20, operationFunc)); // 30 
el.innerHTML=result.toString();
 
operationFunc = function (a: number, b: number): number {
    return a * b;
}
result = mathOp(10, 20, operationFunc);
$('<div>' + result.toString() + '</div>').appendTo(el);