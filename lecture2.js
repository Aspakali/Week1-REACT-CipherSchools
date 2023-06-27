// var myName = "john";
// console.log(myName)

// const myName = [];
// console.log(myName)
// myName.push("john");
// console.log(myName);

// // const myName = 5  not declear


// let myName = "john"
// console.log(myName)
// myName = 5
// console.log(myName)


// var myName = "john"
// console.log(myName)
// myName = 5             
// console.log(myName)

// var myName = "Taylor"
// console.log(myName)

// =================>String Interpolation<============//

// let fristName = "Aspak"
// let lastName = "Ali"

// // let fullName = (fristName + " "+ lastName)
// let fullName =`${fristName} ${lastName}`
// console.log(fullName)

//Default Params

// function addTwoNumber(Num1, Num2){
//     return Num1+Num2;
// }
// console.log(addTwoNumber(5,7));

// ======arrow function<=======//
// let addTwoNumber = (Num1, Num2) =>  Num1+Num2;

// console.log(addTwoNumber(5,7));

// let addTwoNumber = (Num1, Num2) => {
//     console.log(Num1)
//     console.log(Num2)
//     return Num1+Num2

// }
// console.log(addTwoNumber(5,7));

// what if i only pass one arrugment = gives undefined, NaN

// let addTwoNumber = (Num1, Num2) => {
//     console.log(Num1)
//     console.log(Num2)
//     return Num1+Num2

// }
// console.log(addTwoNumber(7,45));

// ==========Rest and Spread Operator are applicable in array and Object in JS <=======//

// let array = [5 , 6, 15, 20]
// let newArray= [...array, 30, 40, 45]

// // Spread Operator -> ... (take out all the element of this array)
// console.log(newArray)  //deep cloneing in array


// Rest -> ... 

// let testFunction = (...args) => {
//     console.log(args)
// }

// let maxOfNumbers = (...numbers) => {
//     let maximum = Number.MIN_VALUE;
//     for(let number of numbers){
//         maximum = Math.max(maximum, number);
//     }
//     return maximum;
// }
// console.log(maxOfNumbers(1,45,3,56,3,56));


//=========== For Object <==========//

// let object = {
//     name: "john",
//     age:25,
//     city:"New Work",
// };
// let object2 = {...object, country:"USA", favoriteSong: "Happy meal"}
// console.log(object2)

// let object = {
//     name: "john",
//     age:25,
//     city:"New Work",
// };
// let object2 = {...object, name:"Aspak"} // only change the name varible all are remain same
// console.log(object2)


// let object = {
//     name: "john",
//     age:25,
//     address : {
//         city: "New work",
//         state: "NY",
//         country: "USA"

//     }
// };
// let object2 = {...object};
// object2.address.city = "Chandpur"  // shallow cloning
// console.log(object)





// ==========>Deep cloneing <============//

let object = {
    name: "john",
    age:25,
    address : {
        city: "New work",
        state: "NY",
        country: "USA"

    }
};
let object2 = JSON.parse(JSON.stringify(object));
object2.address.city = "Chandpur"
console.log(object)