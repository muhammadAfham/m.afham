// document.write("5" *5);
// var a=5;
// var b=4;
// var c=7;
// var d=8;
// document.write(a+9);
// alert(b);
// console.log(c);
// console.warn(d);
// var b=parseFloat(prompt("Enter number1"));
// var a=parseFloat(prompt("Enter number2"));
// document.write(b*a);
// var c=prompt("enter number");
// if (c==="7") {
//     alert("true");
// }
// else{
//     document.write("false");
// }

// var a=parseInt(prompt("enter num1"));
// var b=parseInt(prompt("enter num2"));
// var c=prompt("enter operator");
// if(c=="+"){
//     document.write(a+b);
// }
// else if(c=="-"){
//     document.write(a-b);
// }
// else if(c=="*"){
//     document.write(a*b);
// }
// else if(c=="/"){
//     document.write(a/b);
// }
// else{
//     document.write("unknown operator");
// }

// var a=5;
// var b=6;
// if(a==3 || b==6){
//     document.write("true");
// }
// else{
//     document.write("false");
// }

// var a =parseInt(prompt("enter value"))
// for(i=1;i<=10;i++){
//     document.write(a+" X"+i+"="+i*a+"<br>");
// }
// var a=parseInt(prompt("enter value"));
// if(a%2==1){
//     alert("number is odd");
// }
// else{
//     alert("number is even");
// }
// var a = parseInt(prompt("enter value"));
// if (a % 2 == 0) {
//     for (i = 1; i <= 10; i++) {
//         if (i % 2 == 1) {
//             document.write(a + " X" + i + "=" + i * a + "<br>");
//         }

//     }
// }
// else {
//     document.write("number is odd")
// }

// var a = parseInt(prompt("enter value"));
// if (a % 2 == 0) {
//     var i=0;
//     while (i <= 10) {
//         if (i % 2 == 1) {
//             document.write(a + " X" + i + "=" + i * a + "<br>");

//         }
//         i++;

//     }
// }
// else if(a % 2 == 1) {
//     document.write("number is odd")
// }
// else{
//     var z=prompt("enter value");
//     if(z=="1234"){
//         document.write("logged in")
//     }
//     else{
//         document.write("logged out")
//     }
// }
// non parameterized function
// creation
// function greet(){
//     // definition
//     alert("hello world");
// }
// // calling
// greet();


// parameterized function
// creation
// var c=parseInt(prompt("enter num1"));
// var d=parseInt(prompt("enter num2"));
// function greet(a,b){
//     // definition
//     alert(a+b);
// }
// // calling
// greet(c,d);

// function greet(){
//     // definition
//     alert("hello world");
// }
// var a=parseInt(prompt("enter num"));
// if(a%2==0){
//     for(i=0;i<3;i++){
//         greet();
//     }
// }
// else if(a%2==1){
//     document.write("number is odd");
// }

// var i=6;
// while(i<3){
//     document.write("hello world"+"<br>");
//     i++;
// }
// var i=6;
// do{
//     document.write("hello world"+"<br>");
//     i++;
// }while(i<3);

// function greet(n){
//     var sum=0;
//     var i=1;
//     while(i<=n){
//         sum=sum+i;
//         // 1=0+1;
//         // 3=1+2;
//         i++;

//     }
//     document.write("the sum of"+n+"is"+sum);
// }
// greet(5)


// var a=parseInt(prompt("enter value"));
// switch(a){
//     case 1:
//         document.write("sunday");
//         break;
//     case 2:
//         document.write("monday");
//         break;
//     case 3:
//         document.write("tuesday");
//         break;
//     case 4:
//         document.write("wednessday");
//         break;
//     default:
//         document.write("invalid");

// }
// function sumnum(a){
//     var sum=0;
//     var i=1;
//     while(i<=a){
//         sum=sum+(i*i);
//         i++;

//     }
//     document.write("the sum of "+a+"is"+sum);

// }
// sumnum(4)

// var arr = [
//     [
//         ["a","b", 21],
//         [78, 89, 23],
//         [34, 82, 1]
//     ],
//     [
//         [5, 9, 1],
//         [100, 8, 27],
//         [99, 29, 19],
//         [10, 65, 88],
//     ]

// ]
// document.write(arr[1][3][1])

// // remove last Element of the array
// let b=["A","B","C","Z"];
// b.pop();
// document.write(b)

// 2)
// // add item in the last of the array
// let b=["A","B","C"];
// b.push("Z");
// document.write(b)


// 3)
// remove item in the start of the array
// let b=["A","B","C"];
// b.shift();
// document.write(b)
// var a = parseFloat(prompt("enter value"))
// switch (a) {
//     case 1:
//         document.write("MONDAY")
//         break;
//     case 2:
//         document.write("TUESDAY")
//         break;
//     case 3:
//         document.write("WEDNESDAY")
//         break;
//     case 4:
//         document.write("THURSDAY")
//         break;
//     case 5:
//         document.write("FRIDAY")
//         break;
//     case 6:
//         document.write("SATURDAY")
//         break;
//     case 7:
//         document.write("SUNDAY")
//         break;
// }
// if (a == 1) {
//     document.write(":English--Isl--S.ST--Maths--Sci")
// }
// if (a == 2) {
//     document.write(":Sci--Eng--Isl--S.ST--Urdu")
// }
// if (a == 3) {
//     document.write(":Sci--Maths--Isl--Urdu--Sindhi")
// }
// if (a == 4) {
//     document.write(":Comp--Eng-Sindhi--Maths--S.ST")
// }
// if (a == 5) {
//     document.write(":Urdu--Comp (lab)--Maths--Eng--P.T")
// }
// if (a == 6) {
//     document.write(":VACATION 1")
// }
// if (a == 7) {
//     document.write(":VACATION 2")

// }
// if (a == "00") {
//     var w = parseInt(prompt("enter numb"));
//     var e = parseInt(prompt("enter numb 2"));
//     var t = (prompt("enter opertor"));
//     if (t == "+") {
//         document.write(w + e)
//     }
//     if (t == "-") {
//         document.write(w - e)
//     }
//     if (t == "*") {
//         document.write(w * e)
//     }
//     if (t == "/") {
//         document.write(w / e)
//     }
// }
// else if (a == "1234") {
//     var b = (prompt("Enter Pass"))
//     if (b == "innocent23") {
//         document.write("WELLCOME TO VAULT" + "<br>")
//     }
//     else {
//         for (i = 1; i <= 3; i++)
//             alert("DONT BE EVIL{Wrong Password}")

//     }
// }
// if (b == "innocent23") {
//     document.write("m.afham17" + "<br>" + "maharaja9")
// }
var b=(prompt("enter num"))
for(i=1;i<=b;i++){
var a = parseInt(prompt("enter value"+i))
var value=array
var array= [a+","];
document.write(array)
array.push(value)
}
// var a=(prompt("enter number"))
// for(i=1;i<=a;i++){
// var b=parseInt(prompt("enter numberss"+i))
// }
// var value=10
// document.write(value)
