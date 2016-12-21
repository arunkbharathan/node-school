// Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).

//console.log(process.argv);
argv  = process.argv;
total = 0;
debugger;
for(var i = 2;i<argv.length;i++)
{
	total  = total + +argv[i]
}
console.log(Number(total))
