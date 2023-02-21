// Practice Problem map(), filter(), find()
const arr = [ 1, 3, 5, 7, 9 ];
let sum = [];
for (let i = 0 ; i < arr.length ; i++) {
    let element = arr[i]+1;
    sum.push(element);
}
// console.log(sum);

// const total =arr.map(n=>n+1);
// console.log(total);

const arr1 =  [33, 50, 79, 78, 90, 101, 30 ];
const totals = arr1.filter(n=>n%10===0);
// console.log(totals);
const total = arr1.find(n=>n%10===0);
// console.log(total);


// Practice Problem reduce()
const arr2 =  [ 1, 9, 17, 22 ];
let sums = 0;
for(let i = 0 ; i < arr2.length ; i++) {
    let element = arr2[i];
    sums+=element;
}
// console.log(sums);
// let total = arr2.reduce((a,b)=> a+b,0);
// console.log(total);

const people = [
    { name: 'John', age: 20 },
    {name: 'Mary', age: 15 },
    {name: 'Mike', age: 22 },
]
const reDuce = people.reduce((x,y)=>x+y.age,0); 
// console.log(reDuce);

//Practice Problem: Access Object values
const student = {
    name: 'John',
    age: 20,
}
// console.log(student.age);
// console.log(student['age']);
// const ages = 'age';
// console.log(student[ages]);

let data = {
    location :[
        {
            latitude: '34.5 , 37.8',
            longitude: '98.77 , 58.7',
            city: 'New York',
            country: 'United States',
        }
    ]
}

const dataS = data.location[0].city;
// console.log(dataS);
const [{city}] = data.location;
// console.log(city);

const user ={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  const values = `
  Console the value of ${user.email}
  Console the value of ${JSON.stringify(user.address)}
  Console the value of ${user.address.city}
  Console the value of ${user.address.geo.lat}
  Console the value of ${user.company.name}
  `
//   console.log(values);
  



