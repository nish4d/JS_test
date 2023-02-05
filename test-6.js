//find max number

// function maxFun(value1,value2,value3){
//     if(value1>value2 && value1>value3){
//         return value1;
//     }
//     else if(value2>value1 && value2> value3){
//         return value2;
//     }
//     else{
//         return value3;
//     }
// }

// let maxVal = maxFun(23,42,53);
// console.log(maxVal);

// find min number

// function maxFun(value1,value2,value3){
//     if(value1<value2 && value1<value3){
//         return value1;
//     }
//     else if(value2<value1 && value2< value3){
//         return value2;
//     }
//     else{
//         return value3;
//     }
// }

// let maxVal = maxFun(23,42,53);
// console.log(maxVal);

// find max number using Math.max method
// function maxFun(value1,value2,value3){
//     let element = (value1,value2,value3);
//     element = Math.max(element);
//     return element;
// }

// let maxVal = maxFun(23,42,53);
// console.log(maxVal);

//Area of volume
// function volume(width,height,length){
//     return width*height*length;
// }
// let vol = volume(5,5,5);
// console.log(vol);


// find prime number
// let n =20;

// function myFunction(n){
//     for(i=2;i<n;i++){
//         if(n%i===0){
//             return n+" not prime";
//         }
//     }
//     return n+ " prime";
// }
// console.log(myFunction(n));

// duplicate number
// let a = ['abul','babul','labul','khabul','abul','babul'];
// let b=[];
// for(i=0;i<a.length;i++){
//     if(b.includes(a[i])===false){
//         b.push(a[i]);
//     }
// }
// console.log(b);

// ---------------
// let num = 50;
// for(i=1; i<=num;i++){
//     // console.log(i);
//     if(i%3 === 0 && i%5 === 0){
//         console.log("foobar");
//     }
//     else if(i%3 === 0){
//         console.log("foo");
//     }
//     if(i%5 === 0){
//         console.log("bar");
//     }
//     else{
//         console.log(i);
//     }
// }

// how many wood need for chair table and bed

// function woodNeed(chair,table,bed){

//     let chairs = 3;
//     let tables = 10;
//     let beds = 50;
//     let _ch = chairs * chair;
//     let _ta = tables *table;
//     let _be = beds * bed;

//     let total = (_ch+_ta+_be);
//     return total;
// }

// let a = woodNeed(2,0,0);
// console.log(a);

// lowest phone in array
// const phone = [
//     {name: "vivo", camera: 12, price:10000 },
//     {name: "samgsung", camera: 13, price:11000 },
//     {name: "iphone", camera: 11, price:17000 },
//     {name: "oppo", camera: 10, price:12000 }
// ]
// function myFunction(phones){
//     let log = phones[0];
//     for(i=0;i<phones.length;i++){
//         let phone = phones[i];
//         if(phone.price<log.price){
//             log = phone;
//         }
//     }
//     return log;
// }
// let total = myFunction(phone);
// console.log(total);

// long string in array
let names = ["cool", "hot", "cooool", "hooooot"];
let largeName = "";
for (let i = 0; i < names.length; i++) {
if (names[i].length > largeName.length) {
largeName = names[i];
}
}
console.log(largeName);



/* 
--------------------------
    conceptional sec 
--------------------------
*/



// 1+.....n
// let n = 10;
// let sum = 0;
// for(i=0;i<=n;i++){
//     sum=sum+n;
// }
// console.log(sum);
// formula using n(n+1)/2


// const arrays = [23,42,53,674,74,23,53,64,76];
// let sli = arrays.slice(2,5);
// console.log(sli);
// console.log(arrays);

// const spl = [24,52,63,74,85,23,13,63,24,53,63];
// let sp = spl.splice(2,6,456,23432,53563,74574);
// console.log(sp);
// console.log(spl);

//remove duplicate value
// const arr =['bul','jul','cul','lol','jul'];
// function removeDup(number){
//     let element = [];
//     for(i = 0;i <number.length;i++){
//         let name = number[i];
//         if(element.includes(name)===false){
//             element.push(name);
//         }
//     }
//     return element;
// }
// let dupNum = removeDup(arr);
// console.log(dupNum);

//show output form 1-50
//number divisible by 3 then instead the number show "foo"
//number divisible by 5 then instead the number show "bar"
//number divisible by 3 and 5 then instead the number show "foobar"

// for(let i=1; i<=50;i++){
//     if(i%3===0 && i%5===0){
//         console.log("foobar");
//     }
//     else if(i%3===0){
//         console.log("foo");
//     }
//     else if(i%5===0){
//         console.log("bar");
//     }
//     else{

//         console.log(i);
//     }
// }

//who get this cake
// let jim = 54;
// let deLa = 95;
// let chiNku = 94;
// if(jim>deLa && jim>chiNku){
//     console.log("jim get this cake");
// }else if(deLa>jim && deLa>chiNku){
//     console.log("deLa get this cake");
// }else{
//     console.log("chiNku get this cake")
// }

// find the largest number in array

// let arr = [157,134,188];
// let maxVal = [];
// for(i=0;i<arr.length;i++){
//     let element = arr[i];
//     if(element>maxVal){
//         maxVal = element;
//     }
// }
// console.log(maxVal);

// fibonacci calculate
//go to support section solve index vs value problem

let fib = [0,1];
for (i=2;i<10;i++){
    fib[i] = fib[i-1] + fib[i-2];
}
console.log(fib);

// problem solved
let a = [];
for (let i = 0; i<10; i++){
    a[i] = i;
}
console.log(a);
