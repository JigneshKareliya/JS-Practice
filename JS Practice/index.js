// let a = "   jignesh  kaliya   ";

// trim method

// let  c = a.trim();
// console.log(a);
// console.log(c);

// console.log(a.toUpperCase());
// console.log(a.indexOf('g'));
// console.log(a.includes('kaliya'));

// console.log(c.lastIndexOf("kaliya")); // case sensitive

// console.log(c.includes("jignesh")); // true
// console.log(c.includes("Jignesh")); // false

// // slice method

// let jk = 'jigneshkaliya';
// console.log(jk.slice(7,11));

// console.log("hello mr. ", jk);

// string split method

// let favoriteColors = "Blue, Darkblue, Skyblue,";

// let arrcolor = favoriteColors.split(' ');
// //string to array

// console.log(arrcolor);

// javascript strings are immutable

// let str = "Hello";
// console.log(str);

// str = str + "programer";
// console.log(st);

// loose Equality (==) vs Strict Equality Operator (===)

// loose Equality Operator

// let age = 22;
// console.log(age == '22');
// console.log(age != '22');

// // trict Equality Operator (===)

// console.log(age === '22');
// console.log(age !== '22');

//type converstion

// let stringType = "22";
// console.log(stringType,typeof stringType);

//number method

// let numberType = Number(stringType);
// console.log(numberType,typeof numberType);

// string method

// let numberType = 22;

// let stringType = String(numberType);

// console.log(stringType,typeof stringType);

// boolean method true/false

// let age = '';
// let booleanValueAge = Boolean(age);

// console.log("Boolean value of age is :", booleanValueAge);

//array

// let l = ["gulab", "jignesh"];
// console.log(d[0]);

// d[2] = "kaliya";
// console.log(d);

// // joid method

// console.log(d.join(''));

//indexof

// console.log(d.indexOf('rose')); //case sencitive

// concat method
// let l = ["gulab", "jignesh"];

// let gj = ["gyan","rayma"];
// console.log(l.concat(gj));
// let updatedl =l.concat(gj);

// //length method

// console.log(updatedl.length);

// // push method
// console.log(updatedl.push('kaliya'));

// //pop method
// console.log(updatedl.pop('kaliya'));

// boolean value and comparison operators

// let booleanType = true;
// let stringType = "true";
// console.log(typeof booleanType, typeof stringType);

// let email = 'gulab@gmail.com'
// let booleanValue = email.includes("g");
// console.log(booleanValue);

// string literals type
// 1. + kari ne kari sako chho
// 2. `` na anda and {} ma tamara variable name

//1.

// let g ="gulab";
// let j ="jignesh";
// console.log("my wife name "+ g);

// 2.

// let g= "gulab";
// let j= "jignesh";
// console.log(`jignesh say : my wife name ${g}`);
// console.log(`gulab say : my hasband name ${j}`);

// loop

// for loop

// for (let i = 1; i<=30; i++){
//     console.log("Run the task ", i);
// }

// usecase of for loop

// let name = ['roce','jignesh','rj','kaliya'];

// for(let i = 0; i<name.length;i++){
//     console.log(name[i]);
// }

// while loop

// let j = 1;
// while (j<=5) {
//     console.log('while loop',j);
//     j++;
// }

// do while

// let g=1;

// do {
//     console.log("do while",g);
//     g++;
// } while (g<=1);

// let age = 46;
// if (age > 10 && age < 18) {
//    console.log("you are childern");
// }else if(age > 19 && age < 45){
//     console.log("you are oky to mrg");
// }else if(age > 45 && age < 65){
//     console.log("you are father of two san");
// }else{
//     console.log("not valide number");
// }

// let i;

// for (i = 0; i <= 10; i++) {
//   if (i == 2) {
//     continue;
//   }
//   console.log(i);
// }

// for (let j = 0; j <= 10; j++) {
    //   if (j == 5){
    //     break;
    //   }
    //   console.log(j);
// }

// let student = {
//     name : 'Mayur Kaliya',
//     age : 20,
//     std10marks : 88.50,
//     std12marks : 85 
// }
// // console.log(student);
// console.log(student['name']);
// console.log(student['std10marks']);
// student.village = "Thangadh";
// student.std12marks = 89.56;
// student.name = 'jigo';
// console.log(student);   

// let myname = new Object();
// myname.name = "Naredra Kaliya";
// myname.age = 22;
// myname.workd = ['pluming','opretorboy','wiring'];
// myname.marrid = true;
// console.log(myname);

// let student = {
//     name : 'Mayur Kaliya',
//     age : 20,
//     std10marks : 88.50,
//     std12marks : 85,
//     greetMe : function(){
//         console.log("Hello my name is mayur kaliya");
//     }
// }
// console.log(student.greetMe());  
// student.greetMe();

// let myname = new Object();
// myname.name = "Naredra Kaliya";
// myname.age = 22;
// myname.workd = ['pluming','opretorboy','wiring'];
// myname.marrid = true;
// console.log(myname);

// let myname = new Object();
// 	myname.name = "Naredra Kaliya";
// 	myname.age = 22;
// 	myname.workd = ['pluming','opretorboy','wiring'];
// 	myname.marrid = true;
// 	myname.greetMe = function(){
//         console.log("Hello my name is mayur kaliya");
//     }
// 	console.log(myname);

// function Course(
//     introuctor,
//     title, 
// 	age,
//     des,
//     langauge
// ){
//   this.introuctor = introuctor;
//   this.title = title;
//   this.age = age;
//   this.des = des;
//   this.langauge = langauge;
// }

// var javascriptCourse = new Course(
//     "Naredra Kaliya",
//     "KALIYA",
// 		"24",
//     "NICE BOY",
//     "GUJRATI" 
// );  
// delete javascriptCourse.age;

// console.log(Object.keys(javascriptCourse));
// console.log(Object.values(javascriptCourse));
// Object.seal(javascriptCourse);
// javascriptCourse.village = "Thangadh";
// javascriptCourse.age = "25";

// console.log(javascriptCourse);

// for (var key in javascriptCourse){
//     // console.log(javascriptCourse[key]);
//     console.log(key);
// }


// const nameNode = document.createElement('h1');  
// nameNode.id = 'name';
// console.log(nameNode);

// const namRef = document.getElementById('name');
// console.log(namRef);

// const descriptionRef = document.getElementsByClassName('description');
// console.log(descriptionRef[0]);

// namRef.innerHTML = "JIGNESH KALIYA";

// higer order functions

// var getSeven = function() {
//   return 7;
// }

// function usefuntion(fn){
//   return fn();
// }

// // console.log(usefuntion(getSeven));

// function returnFunction() {
//   return getSeven;
// }
// const exfun = returnFunction();
// console.log(exfun);

// function sum(x,y) {
//    return x+y;
// }

// function subtract(x,y) {
//   return x-y;
// }

// function calfucnction(fn,x,y) {
//   return fn(x,y);
// }

// console.log(calfucnction(sum,7,10));
// console.log(calfucnction(subtract,27,10));

// function deliverProduct(name,callback) {
//   console.log('done with delivery of ' + name);
//   callback();
// }

// function successFuncion(){
//   console.log('product has been successfully delivered');
// }
// deliverProduct('mackbook',successFuncion);


//callback hell function
// getProdut(18, (product) =>{
//   getUserInfo(product.userName, (address)=>{
//     getAddress(userInfo.userName, (address)=>{
//       console.log(address);
//     })
//   })
// })

// // returning a function
// function multiply7(){
//   return function(x){
//     return x*7;
//   }
// }
// const execFunc = multiply7();
// console.log(execFunc(5));

// function sum(x) {
//   return function (y){
//     return x + y;
//   }
// }
// console.log(typeof sum(1),sum(6)(5));

// let timeID = setInterval(function(){
//   console.log("hello happy birthday");
//   console.log(new Date());
//   clearInterval(timeID);
// },5000);

// const timeID = setTimeout(function(){
//   console.log('First task');
// },1000);
// clearTimeout(timeID);

  // var courceIncart  = [
  //   {
  //     name:"js",
  //   },
  //   {
  //     name:"react.js",
  //   },
  //   {
  //     name:"node.js"
  //   }
  // ];
  // courceIncart.forEach((item,index)=>{
  //   console.log(`item > ${item.name},position :${index}`);
  // });

  // const price = [1000,1500,3500,2500];

  // let output = [];

  // price.forEach(function(item){
  //   output.push(item*0.5);
  // })
  // console.log(output);

  const price = [1000,1500,3500,2500];

  const newrice = price.map(function(item,ind){
    return item*0.5;
  })
  console.log(newrice);
