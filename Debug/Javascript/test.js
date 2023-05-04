/*document.write("This is an external Js2","<br>");
document.getElementById('th').innerHTMl = "This is a para";

var a1 = 5;
var a2 = 50;
document.write("a1+a2 =", a1+a2,"<br>"); 
document.write("a1 with a2 =",a1,a2,"<br>");
document.write("a1-a2 =", a1-a2,"<br>"); 
document.write("a1/a2 =", a1/a2,"<br>"); 
document.write("a1%a2 =", a1%a2,"<br>"); 

//var age = prompt("Tell me Your age");
//alert("Your Age is : ", age,"<br>"); 
*/

var foodcost = prompt("What is the total amount :");
var no_of_people = prompt("How many people were there");
document.write("The total cost of food is : ",foodcost,"<br>");
document.write("Everyone has to pay  : ",(foodcost/no_of_people).toFixed(1),"<br>");

/*
document.write("2^2 = ",Math.pow(2,2),"<br>");
document.write("abs(-34) = ",Math.abs(-34),"<br>");
document.write("sqrt(36) = ",Math.sqrt(36),"<br>");
var str1 = "Chester Rajput";
document.write(str1,"<br>");
document.write("Length is : ",str1.length,"<br>");
document.write(str1.replace("Chester","Shubham"),"<br>");
document.write(str1.toUpperCase(),"<br>");
*/
/*
var p = prompt("What are your percentage");
if(p>75){
	document.write("Distinction");
}
else if( p>55 && p<75 )
	document.write("Average");

else if(p>35 && p<55)
	document.write("Pass");

else
{
	document.write("Fail");
}

var i ;
for(i=1;i<=10;i++)
{
	document.write(i,"<br>");
}*/
var i = [1,2,3,4,5,6,7,8,9];
document.write(i[6]);