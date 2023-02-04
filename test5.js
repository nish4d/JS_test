// shopping cart

const shoppingCart = [
    {name : "shoe", price: 1200, quantity:2 },
    {name : "shirt", price: 1300, quantity:4 },
    {name : "pant", price: 1500, quantity:3 },
    {name : "belt", price: 1000, quantity:1 },

]

function totalCost(product){
    let backs = 0;
    for(i = 0; i<product.length;i++){
        let element = product[i];
        let a = element.price *element.quantity;
        backs = backs+ a;
    }
    return backs;
}

let output= totalCost(shoppingCart);
console.log(output);


//discount  ticket price

function discount(number){
let ticket1price = 100;
let ticket2price = 90;
let ticket3price = 70;

if(number<=100){
    return number*ticket1price;
}
else if(number <=200){
    let a = 100*ticket1price;
    let b = number-100;
    let c = b*ticket2price;
    return a+c;
}else{
    let a = 100* ticket1price;
    let b = 100 * ticket2price;
    let c = number -200;
    let d = c*ticket3price;
    return a+b+d;
}

// let total = discount(201);
// console.log(total);

// feet to inc 
function feetToInch(feet){
    inch = feet * 12;
    return inch;
}

let total = feetToInch(3);
console.log(total);

// centimeter To Meter 
function centimeterToMeter(centimeter){
    let result = centimeter * 0.01; 
    return result;
}
let output = centimeterToMeter(500);
console.log(output);

// paper Requirements

function paperRequirements(book1,book2,book3){

    let books1 = 100;
    let books2 = 200;
    let books3 = 300;
    
    let bok1 = books1 * book1;
    let bok2 = books2 * book2;
    let bok3 = books3 * book3;
    let number = bok1 + bok2 + bok3; 
    return number;
}

let result = paperRequirements(2,1,1);
console.log(result);

// best Friend finding

let best = ['sakib','rakibs','hasib'];

function bestFriend(best){
    let friend = '';
    for(i=0; i<best.length; i++){
        let element = best[i];
        if(element.length> friend.length){
            friend = element;
        }
    }
    return friend;
}

let output = bestFriend(best);
console.log(output);

// array number return only positive number
let number = [3,5,2,-3,6,-2,4];
let a = [];

for(i=0;i<number.length;i++){
    let element = number[i];
    if(element>=0){
        a.push(element);
    } 
    else{
        break;
    }
}
console.log(a);