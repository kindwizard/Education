class User {
 
    name: string;
    constructor(userName: string) {
 
        this.name = userName;
    }
    getInfo(): string {
        return "Имя: " + this.name;
    }
}
 
class Employee extends User {
 
    company: string;
    work(): string {
		return this.name + " работает в компании " + this.company;
    }
}

let newUser: Employee = null;
var cont1 = this.document.getElementById("content1");

function addUser() {
	let uI: string = document.getElementById("userInfo").value;
	newUser = new Employee(uI);
	newUser.company = null;
	document.getElementById("userInfo").style.backgroundColor = "white";
}

function addWork() {
	let wI: string = document.getElementById("workInfo").value;
	if(newUser != null){
		newUser.company = wI;
		document.getElementById("workInfo").style.backgroundColor = "white";
		$('button.b2').removeAttr('disabled');
	}
	else
		document.getElementById("workInfo").style.backgroundColor = "red";
}

$('button.b4').click(function(){
	addUser();
});

$('button.b3').click(function(){
	addWork();
});

$('button.b1').click(function(){
	let Inf: string;
	if(newUser != null && newUser.company != null){
		Inf = newUser.work();
		cont1.innerHTML=Inf;
	}
	else if(newUser != null && newUser.company === null){
		Inf = newUser.getInfo();
		cont1.innerHTML=Inf;
		document.getElementById("workInfo").style.backgroundColor = "red";
	}
	else{
		document.getElementById("userInfo").style.backgroundColor = "red";
		document.getElementById("workInfo").style.backgroundColor = "red";
	}
});

$('button.b2').click(function(){
	let Wrk: string = newUser.work();
	cont1.innerHTML=Wrk;
});

$('button.b5').click(function(){
	newUser = null;
	document.getElementById("userInfo").style.backgroundColor = "white";
	document.getElementById("workInfo").style.backgroundColor = "white";
	cont1.innerHTML="";
	$('button.b2').prop("disabled", true);
});

	
	