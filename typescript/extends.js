var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = (function () {
    function User(userName) {
        this.name = userName;
    }
    User.prototype.getInfo = function () {
        return "Имя: " + this.name;
    };
    return User;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.work = function () {
        return this.name + " работает в компании " + this.company;
    };
    return Employee;
}(User));
var newUser = null;
var cont1 = this.document.getElementById("content1");
function addUser() {
    var uI = document.getElementById("userInfo").value;
    newUser = new Employee(uI);
    newUser.company = null;
    document.getElementById("userInfo").style.backgroundColor = "white";
}
function addWork() {
    var wI = document.getElementById("workInfo").value;
    if (newUser != null) {
        newUser.company = wI;
        document.getElementById("workInfo").style.backgroundColor = "white";
        $('button.b2').removeAttr('disabled');
    }
    else
        document.getElementById("workInfo").style.backgroundColor = "red";
}
$('button.b4').click(function () {
    addUser();
});
$('button.b3').click(function () {
    addWork();
});
$('button.b1').click(function () {
    var Inf;
    if (newUser != null && newUser.company != null) {
        Inf = newUser.work();
        cont1.innerHTML = Inf;
    }
    else if (newUser != null && newUser.company === null) {
        Inf = newUser.getInfo();
        cont1.innerHTML = Inf;
        document.getElementById("workInfo").style.backgroundColor = "red";
    }
    else {
        document.getElementById("userInfo").style.backgroundColor = "red";
        document.getElementById("workInfo").style.backgroundColor = "red";
    }
});
$('button.b2').click(function () {
    var Wrk = newUser.work();
    cont1.innerHTML = Wrk;
});
$('button.b5').click(function () {
    newUser = null;
    document.getElementById("userInfo").style.backgroundColor = "white";
    document.getElementById("workInfo").style.backgroundColor = "white";
    cont1.innerHTML = "";
    $('button.b2').prop("disabled", true);
});
