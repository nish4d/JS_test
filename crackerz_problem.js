// হ্যালো ইউনিভার্স

function helloUniverse(){
    //complete your code 
    //Must return
    let a = "Hello Universe!! Welcome me to JS World!!!";
    return a;
}
// console.log(helloUniverse());

// Count the number of all zero----------------------------
function countZeros ( binary_num ) {
    //Write your code here
    //Don't forget to return
    let number = binary_num.toString();
    let sum = 0;
    for(i=0;i<number.length;i++){
        let element = number[i];
        if(element == 0 ){
            sum = sum+1;
        }
    }
    return sum;
    
}
// let a = countZeros(101101);
// console.log(a);

// Find the area of a rectangle-----------------------------
function findArea( length, width ) {
    //Write your code here
    //Don't forget to return
    return length*width;
}
// console.log(findArea(5,10));

// Find the second largest.----------------------------------
function secondLargest ( numbers ) {
    //Write your code here
    //Don't forget to return
    let sum = 0;
    let ele = 0;
    for(i=0;i<numbers.length;i++){
        let element = numbers[i];
        if(element>sum){
            ele = sum;
            sum = element;
        }
        else if(element>ele){
            ele = element;
        }
    }
    return ele;
}
// let arr = [10,33,5,99,6];
// console.log(secondLargest(arr));

// What are the odds??-----------------------
function findOddSum(arrOfNumbers){
    //write your code here
    //don't forget to write return
    let sum = 0;
    for(i = 0; i<arrOfNumbers.length;i++){
        let element = arrOfNumbers[i];
        if(element%2 !== 0){
            sum = sum+ element;
        }
    }
    return sum;
}
// let arr = [5, 7, 8, 10, 45, 30];
// console.log(findOddSum(arr));

// Can you find the leap years??---------------------------
function findLeapYear(arrOfYears){
    //write your code here
    //don't forget to write return
    let leapYear = [];
    for(i=0;i<arrOfYears.length;i++){
        let element = arrOfYears[i];
        if(element%4 == 0 && element%100 != 0 || element % 400 == 0 ){
            leapYear.push(element);
        }
    }
    return leapYear;
}

// let arr = [2023,2024,2025,2028,2030];
// console.log(findLeapYear(arr));

// Write a code to find the smallest element of the array--------------
function findingSmallest ( numbers ) {
    //Write your code here
    //Don't forget to return
    let element = Math.min(...numbers);
    return element;
}
// let arr = [10,33,5,99,6];
// console.log(findingSmallest(arr));

//Convert Hour to Minute----------------------
function hourToMin(hour){
    //write your code here
    //don't forget to write return
    return hour*60;
}
// console.log(hourToMin(2));

// Who is the tallest?------------
function tallestFriend ( height ) {
    //Write your code here
    //Don't forget to return
    let element = Math.max(...height);
    return element;
}
// let arr = [157,  134,  188 ];
// console.log(tallestFriend(arr));

//Is it Isosceles??-----------------------------
function checkTriangle(side1, side2, side3){
    //write your code here
    //don't forget to write return
    if(side1 === side2 && side2===side3){
        return "No"
    }
    else if((side1 === side2 || side1===side3 || side2 === side3)){
        return "Yes";
    }
    else{
        return "No";
    }
}
// console.log(checkTriangle(8,9,8));

//Find the largest number----------------
function findMax(arr){
    //write your code here
    //don't forget to write return
    let element = Math.max(...arr);
    return element;
}
// const arr = [55,10,95]; 
// console.log(findMax(arr));

//What is Jerry’s final score?------------------
function finalScore ( scores ) {
    //Write your code here
    //Don't forget to return
    let sum = 0;
    for(i=0;i<scores.length;i++){
        sum= sum+ scores[i];
    }
    return sum;
}
// const arr = [20,  13,  37 ];
// console.log(finalScore(arr));

// What's my grade??-----------
function findGrade(marks){
    //write your code here
    //don't forget to write return
    if(marks>= 80 && marks<=100){
        return "A";
    }
    else if(marks>= 60 && marks<80){
        return "B";
    }
    else if(marks>= 50 && marks<60){
        return "C";
    }
    else if(marks>= 40 && marks<50){
        return "D";
    }
    else if(marks>= 0 && marks<40){
        return "F";
    }
    else{
        return "Enter Valid Number"
    }
}
// console.log(findGrade(95));

//Can you find out who will get the delicious cake? (Part II)-----------

function JimOrDelaOrChinku ( marksOfJim, marksOfDela, marksOfChinku ) {
    //Write your code here
    //Don't forget to return
    if(marksOfJim>marksOfDela && marksOfJim>marksOfChinku){
        return "Jim";
    }
    else if(marksOfDela>marksOfJim && marksOfDela>marksOfChinku){
        return "Dela";
    }
    else{
        return "Chinku";
    }
}
// console.log(JimOrDelaOrChinku(84,  99 , 77 ));

// Can you find out who will get the delicious cake? (Part I)--------------

function JimOrDela (marksOfJim, marksOfDela) {
    //Write your code here
    //Must follow lowercase and uppercase
    //Don't forget to return
    if(marksOfJim>marksOfDela){
        return "Jim";
    }
    else{
        return "Dela";
    }
}
// console.log(JimOrDela(84,75));

//Remainder Operation---------------
function findRemainder (mod){
    //write your code here
    //dont forget to write return
    let element = mod%5;
    return element;
}
// console.log(findRemainder(119));

// Conditional Statements: Switch-----------------
function getLetter(s) {
    let letter;
    // Write your code here
    let firstLetter = s[0].toLowerCase(); 
    switch(firstLetter){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        letter = "A";
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        letter = "B";
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        letter = "C";
            break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
        letter = "D";
            break;
    }
    return letter;
}
// console.log(getLetter("adasd"));

// String Operation----------------------
function stringCombine(str1, str2){
    //write your code here
    //don't forget to write return
    let element = str1 +" "+str2;
    return element;
}

// Find the average--------------
function average (arrOfMarks){
    //write your code here
   // don't forget to write return
    let sum = 0;
    let ele = 0;
    for(i=0;i<arrOfMarks.length;i++){
        let element = arrOfMarks[i];
        sum = sum+element;
        ele = sum/arrOfMarks.length;
    }
    let ret = ele.toFixed(2);
    return parseFloat(ret);
}
// let arr = [100, 100, 100, 100, 100];
// console.log(average(arr));

// Subtraction Operation-------------------------
function subtraction (num1, num2){
    //write your code here
    //don't forget to write return
    let element = num1 - num2;
    return Math.abs(element);
}

// Convert temperature----------------
function temperatureConverter(valNum) {
    let element = (valNum-32)/1.8;
    let ele = element.toFixed(2);
    return parseFloat(ele);
}
// let a = temperatureConverter(103)
// console.log(a);

//Delete a property from an object-----------

function deleteProperty (arr) {

    const obj = arr[0];
    const str = arr[1];
    const objProperty = Object.keys(obj);

    if(str.includes(objProperty) === true) {
        delete arr[0].fname;
        return "YES";
    }
    else {
        return "NO";
    }
}
// const inputArray = [{fname:'John',},'fname']
// const result = deleteProperty(inputArray);
// console.log(result);

// Calculate total cost------------
const totalCost = (products) => {
    let sum = 0;
    for(i=0;i<products.length;i++){
        let element = products[i];
        let ele = element.price;
        sum = sum + ele;
    }
    return sum;
};
// let a = [{ name: "Samsung M33", price: 10000 },{ name: "Samsung Charger", price: 500},{ name: "Haveit Speakers", price:2500}];
// console.log(totalCost(a));

// Detect vowel and consonent-------------------
const solution = (letter)=> {
    //Write Your solution Here
   //dont forget to return
    letter = letter.toLowerCase();
    if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
        return "VOWEL";
    }
    else{
        return "CONSONANT";
    }
};
// console.log(solution("a"));

// Reverse The String----------------------
const reverseMaker = (word)=> {
    //Write Your solution Here
    let element = word.split("").reverse().join("");
    return element;
};
// reverseMaker("GeeksforGeeks");






