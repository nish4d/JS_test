// test 1

function hourToMin(hour){
    return hour * 60;
}
let hour = hourToMin(2);
console.log(hour);

// test 2

function findLeapYear(year){
    var leapYear = [];
    for(let i = 1; i < year.length ; i++){
        let element = year[i];
        let ele = element % 4;
        if (ele == 0){
            leapYear.push(element);
        }
    }
    return leapYear;
}


let allYear = [2023,2024,2025,2028,2030];

let total = findLeapYear(allYear);
console.log(total);

// test 3

function findOddNumber(number){
    let odd = 0;
    for(let i = 0; i < number.length; i++){
        let element = number[i];
        if(element%2 !== 0){
            odd += element;
        }
    }
    return odd;
}

const arr = [5, 7, 8, 10, 45, 30];
let total = findOddNumber(arr);
console.log(total);

// test 4

function namTa(number){
    let total = [];
    for(let i = 1; i <= 10; i++){
        let element = number *i;
        console.log(element);
        total.push(element);

    }
    return total;
}

let wNamTa = 13; 
let namTagHor = namTa(wNamTa);
console.log(namTagHor);

// test 5
function lowercase(number){
    let low = number.toLocaleLowerCase()
    return low;
};

let upper = "TuHiN";
console.log(lowercase(upper));

// test 6

function fullName(a,b){
    return a+b;
}
console.log('hablu','kanto ');

// test 7

function squRe (number){
    return number*number;
}
console.log(squRe(5));

// test 8
const pizza = {
    topPings : ['cheese','sauce', 'pepperoni'],
    crust : 'dip dish',
    server : 2
}
console.log(pizza.topPings.pop());
console.log(pizza.topPings.length-1);






