//test 1

var alIa = 65;
if(alIa<50){
    console.log("grade F");
}else if(alIa>50 && alIa<60){
    console.log("Grade D");
}
else if(alIa>60 && alIa<70){
    console.log("Grade C");
}
else if(alIa>70 && alIa<80){
    console.log("Grade B");
}
else if(alIa>80 && alIa<90){
    console.log("Grade A");
}
else if(alIa>90){
    console.log("Grade A+");
}

// test 2

var signal="green";
if(signal == 'red'){
    console.log("Danger");
}else if(signal == 'green'){
    console.log("Cross the road");
}else if(signal == 'yellow'){
    console.log("Don't cross the road");
}

// test 3

var fruits = ['Apple', 'Banana', 'Orange'];
var find = fruits.indexOf('Banana');
console.log(fruits);
console.log("Find Banana Index = " + find);
fruits[1] = "Mango";
console.log("Replace Banana = " + fruits);
fruits.pop()
console.log("Remove Orange = " + fruits);
fruits.push("Watermelon");
console.log("Add Watermelon = " + fruits);

// test 4

var Tom = 65;
if(Tom>=80){
    console.log("grade A");
}
else if(Tom>=60 && Tom<80){
    console.log("Grade B");
}
else if(Tom>=50 && Tom<60){
    console.log("Grade C");
}
else if(Tom>=40 && Tom<50){
    console.log("Grade D");
}
else {
    console.log("Grade F");
}

// test 5

// 1.
var a = 13;
var b = 79;
var c = 45;
if (a>b && a> c){
    console.log(a);
}
else if (b>a && b>c){
    console.log(b);
}
else if (c>a && c> b){
    console.log(c);
}


// 2.
var right = 9;
var left = 9;
var middle = 8;

if (right == left || right == middle || left == middle){
    console.log("two side are equal");
}
else{
    console.log("two side are not equal");
}



