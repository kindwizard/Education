/// <reference path="globals.d.ts" />

class Utility {
    static displayGlobalVar() {
         
        console.log(globalVar);
    }
}
 
window.onload = () => {
     
    Utility.displayGlobalVar();
    
};