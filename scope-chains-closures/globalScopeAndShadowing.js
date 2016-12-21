 // 1) Search within the current scope.
 // 2) If not found, search in the immediately outer scope.
 // 3) If found, go to 6.
 // 4) If not found, repeat 2. Until the Global Scope is reached.
 // 5) If not found in Global Scope, create it (on window / global objects).
 // 6) Assign the value.


 function foo(){
 	quux = 1;
var bar;
function zip(){
	var quux = 4;
}
}