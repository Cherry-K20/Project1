let number =8;
if( number<0 ){
    console.log("negative");}
    else{
        console.log("positive");
    }
console.log("------------------------");
let age= 18;
let nationality =true;
 if( age>=18 && nationality){
    console.log("you can vote");
  }else{
    console.log("you can't vote");
  }

console.log("-----------------------");
 let amount= 30;
 if( amount>=50){
    console.log(" free delivery");
    
 }else{console.log("delivery fee:$5");
 }
 console.log("-------------------------");

 //•	0–12 → $5 
// •	13–17 → $8 
// •	18–59 → $12 
// •	60+ → $7
let Age = 12;
if(Age<=12){ console.log("$5");
    
}else if( Age>=13 && Age< 18){
    console.log("$8");
}else if( Age>=18 && Age< 60){
    console.log("$12");
}else{
    console.log("$7");
}
console.log("------------------------");

// •	Below 40 → "Too Slow" 
// •	40–80 → "Normal Speed" 
// •	81–100 → "Fast" 
// •	Above 100 → "Speeding"

let speed= 101;
if( speed<40){
    console.log("Too slow");
} else if( speed>=40 && speed<=80){
    console.log("Normal speed");
}else if( speed>=81 && speed<=100){
    console.log("Fast");
}else{ console.log("speeding");}
console.log("----------------");

// •	Below 18.5 → "Underweight" 
// •	18.5–24.9 → "Normal" 
// •	25–29.9 → "Overweight" 
// •	30+ → "Obese"
 let BMI= 19;
 if( BMI<18.5){
    console.log("underweight");
 }else if( BMI>=18.5 && BMI<=24.9){
    console.log("normal");
 }else if( BMI>=25 && BMI<=29.9){
    console.log("overweight");
 }else{
    console.log("obese");
 }
 console.log("------------------------------");

// Exercise 1: Month Name
// Question: Ask the user to enter a number from 1–12 and display the month.
let month= 2;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");    
        break;
    case 3:
        console.log("March");    
        break;
    case 4:
        console.log("April");    
        break;
    case 5:
        console.log("May");    
        break;
    case 6:
        console.log("June");    
        break;
    case 7:
        console.log("July");    
        break;
    case 8:
        console.log("August");    
        break;
    case 9:
        console.log("September");    
        break;
    case 10:
        console.log("October");    
        break;
    case 11:
        console.log("November");    
        break;
    case 12:
        console.log("December");    
        break;
       
}
// Exercise 2: Traffic Light
// Question: Ask the user to enter a traffic light color.
// •	"red" → Stop 
// •	"yellow" → Get Ready 
// •	"green" → Go
 
let color= " ";
switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get ready");
        break;
    case "green": 
        console.log("Go");
        break;

}
console.log("-----------------------------------------");
// Exercise 3: Simple Menu
// Question: Ask the user to choose:
// 1. Check Balance
// 2. Deposit
// 3. Withdraw
// 4. Exit
// Display the appropriate message.
 let menu=2;
 switch(menu){
case 1:
    console.log("check balance");
    break;
case 2:
    console.log("deposit");
    break;
case 3:
    console.log("withdraw");
    break;
case 4:
    console.log("exist");
    break;
}
// Exercise 1: Print Even Numbers
// Question: Use a for loop to print even numbers from 2 to 20.
// Exercise 2: Countdown
// Question: Use a for loop to print numbers from 10 down to 1.
// Exercise 3: Calculate Factorial
// Question: Add a number and calculate its factorial.

console.log("---------------------");
for( let i=2; i<=20;i++){
    if( i%2 ==0){console.log(i);}
}
console.log("--------------------------------");
for( let i=10;i>=1;i--){
    console.log(i);
}
console.log("-----------------------------------");
let factorial =1;
let num=5;
for(let i =num; i>=1;i--){
factorial *=i;
}console.log(factorial);

console.log("-----------------------------------");

// Exercise 1: Say Hello
// Question: Create a function that receives a name and displays a greeting.
// Exercise 2: Find Square
// Question: Create a function called square() that receives a number and returns its square.
// Exercise 3: Check Even Number
// Question: Create a function called isEven() that receives a number.
// Return:
// •	"Even" if the number is even 
// •	"Odd" if the number is odd

function greet( name,greeting ="Hello! ")
{
    let output= greeting + name;
    return output;
}
console.log(greet("Tr","Good Morning! "));
console.log("---------------------------------");
 function square(num){
    let result= num**2;
    return result;
 }
 console.log(square(9))
 console.log("---------------------");
 function isEven(num){
    let result;
 if(num%2==0)
   {result = "even";} 
else{ result = "odd";}
 return result;
 }
console.log(isEven(6));

 