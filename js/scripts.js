	
function check(){
	var num = prompt("Enter a number: ");

	if(Number(num)>100){
		document.write("<h1>"+num+" is greater than 100.</h1>");				
	}
	else if (Number(num)<=100){
		document.write("<h1>"+num+" is not greater than 100.</h1>");
	}
	else{
		document.write("<h1>"+num+" is invalid Number.</h1>");			
	}			
}

function convert(){
	var val = Number(prompt("Enter temperature: "));
	var toCon = prompt("Select 'c' to convert Celsius to Fahrenheit and 'f' for vice-versa: ");
	
	if(toCon=='c'||toCon=='C'){
		var rslt = val * (9 / 5) + 32;
		document.write("<h1>"+ val +"\xB0C in Fahrenheit is: "+ rslt +"\xB0F.</h1>");		
	}
	else if(toCon=='f'||toCon=='F'){
		var rslt = (val - 32) * (5 / 9);
		document.write("<h1>"+ val +"\xB0F in Celsius is : "+ rslt +"\xB0C.</h1>");
	}
}

function calculate(){
	var num1 = Number(prompt("Enter number 1: "));
	var num2 = Number(prompt("Enter number 2: "));
	
	var mul = num1 * num2;
	document.write("<h1>Result of "+ num1 + " * " + num2 +" is : "+ mul +"</h1>");
	
	if(num2 != 0){
		var div = num1 / num2;
		document.write("<h1>Result of "+ num1 + " / " + num2 +" is : "+ div +"</h1>");
	}
	else{
		document.write("<h1>"+ num1 + " / " + num2 +" is not possible.</h1>");
	}
}

function result(){

	var math = Number(prompt("Enter marks obtained in math out of 100: "));
	var sci = Number(prompt("Enter marks obtained in science out of 100: "));
	var eng = Number(prompt("Enter marks obtained in english out of 100: "));
	
	var tot = math + sci + eng;
	var per = (tot / 300) * 100; /*Sum of full mark of 3 subject is 300 */

	if(per>=80){
		document.write("<h1>Student scored: "+per+"% and passed with Distinction position.</h1>");		
	}
	else if(per>=60){
		document.write("<h1>Student scored: "+per+"% and passed with First Division position.</h1>");	
	}
	else if(per>=40){
		document.write("<h1>Student scored: "+per+"% and passed with Second Division position.</h1>");	
	}
	else{
		document.write("<h1>Student scored: "+per+"% and Failed.</h1>");	
	}
}

function count(){
	var char;
	var b = 0;
	var g = 0;

	do{
		char = prompt("Enter characters: ");
		if(char == 'b'){
			b++;
		}
		else if(char == 'g'){
			g++;		
		}
	}while(char!='x');

	document.write("<h1>Total number of boys: "+b+" and number of girls: "+g+".</h1>");
}










