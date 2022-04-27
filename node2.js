// let f1 = function message(){
//     console.log("Hello")
// }
// let f2= function(){
//     console.log("this is qa")
// }

// function doSomething(func){
//     func()
// }

// doSomething(f2)  //passing a function to a function 
// High order function = when a function can receive a function, return a function or can do both

// function Merisa(day) {
//     let f
//     if (day == 1){
//         f = function() {
//             for(let i=0; i<=10; i++){
//                 console.log(i)
//             }
//         }
//     }
//     if (day == 2){
//          f = function() {
//              console.log("take backup")
//                     }
//                 }

//                     return f
//     }
//     let Fun=Merisa(1)
//     Fun()


    
    //-----------operations----------------------//

    // function operations(function1,num1,num2){
    //     function1(num1,num2)
    // }
    
    // let add=function(a,b){
    //     console.log("Results of Addition is:"+(a+b))
    // }
    
    // let sub=function(a,b){
    //     console.log("Results of subtraction is:"+(a-b))
    // }
    
    // function division(a,b){
    //     console.log("Results of division is:"+(a/b))    
    // }


    // // different ways of passing the function
    // operations(add, 10, 20)
    // operations(function(a,b){
    //     console.log("Results of Multiplication is:"+(a*b))
    //             },10,20)
    // operations(division,20,10)


    // function add() {
    //     // whenever you call a function..inside the function it creates an array and all the values will be automatically be stored..
    //     // for loop to print out all the elements in the argument array
    //     for (i=0;i<arguments.length;i++){
    //         console.log(arguments[i])  
    //     }
    //     console.log(arguments.length)  
    // }
    // add("Merisa", 13,15,16)

    // function addition(){
    //     let total=0
    //     for(let i=0; i<arguments.length;i++){
    //         total+=arguments[i]
    //     }
    //     console.log("The result of addition is " + total)
    // }
    // addition(34,100,200)





    let functions=[] //functions is just the name of the array

    functions.push(function(){console.log("Hello")})
    functions.push(function(){
        for(let i=0; i<10; i++){
            console.log(i)
        }
    })

    for(let i=0; i<functions.length;i++){
        functions[i]();
        }

    // Task 
    // hello shafeeq hi shafeeq hello james 
    // the function should print - hello shafeeq hi james
    // The duplicates should be printed only once
    // let greetings = ["hello","shafeeq", "hi", "shafeeq", "hello", "james"]
    // greetings.push(function(){console.log("Hello")})

    // function print(){

    // }

    // function removeDuplicate(){
    //     for(let i=0;i<=greetings.length;i++){
    //         console.log(greetings.value);
    //     }
    // }
    // removeDuplicate();


