// let physics=90
// let chemistry=60
// let total= physics+chemistry 
// let percentage=total*100/200
// console.log("The Result is: " + total)

// if (percentage >=60){
//     console.log("You have passed the exam")
// } else {
//     console.log("you have failed the exam")
// } 


// let number = 78 //do 7+ 8
// console.log(parseInt(number/10) + number%10)

// let number1 = 367 //do 3 + 6 + 7
// console.log(parseInt(number1/100)+ parseInt(67/10) + number1%10)




// let bill = 10
// let paid = 115
// let balance = paid - bill
// if (balance >= 50) {
//     let n50=parseInt(balance/50)
//     console.log("50 =" +n50)
//     balance=balance%50
// }
// if (balance >= 20) {
//     let n20=parseInt(balance/20)
//     console.log("20 =" +n20)
//     balance=balance%20
// }
// if (balance >=10) {
//     console.log("10 = 1")  // 10 will always be 1 
//     balance=balance%10
// }
// if (balance >=5) {  // 5 will always be 1
//     console.log("5 = 1")
//     balance=balance%5
// }
// if (balance >=2) {
//     let c2=parseInt(balance/2)
//     console.log("2 =" +c2)
//     balance=balance%2
// }
// if (balance >=1) {
//     let c1=parseInt(balance/1)
//     console.log("1 =" +c1)
//     balance=balance%1
// }



//for(initialization; condition; updation)
// - initialization (zero or more initialization)
// - condition (zero or one condition)
// - updation (zero or more updation)

let a=1
let b=10
let c=100
// for(; a<=10; a++, b+=10, c+=100){
//     console.log(a+ "...." + b + "...." + c);
// }

//zero updation - we are doing the updation inside the body of the loop
// for(; a<=10;){
//     console.log(a+ "...." + b + "...." + c);
//     a++;
//     b+=10;
//     c+=100;
// }

//zero condition 
for(; ;){
    console.log(a+ "...." + b + "...." + c);
    a++;
    b+=10;
    c+=100;
    if(a ==10){
        break;
    }
}
