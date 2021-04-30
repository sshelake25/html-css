
// alert('we are in externa file');

/* 
This is way to add multi commnets
*/

// let firstName = "Test";

let listCars = ["Maruti", "TATA", "Suzuki", "Mahi", "toyta"];

console.log(listCars[2], listCars[4]);

let myAdress = {
  single: 'A',
  phone: 9090,
  city: 'mum',
  officeAddres: {
    path: 'abc chouck',
    buildNo: 301,
    area: 'Bangloar'
  },
  visitedPlace: ['Mumb', 'Ban', 'Us', 'cand'],
  fFood: {
    friute: ['apple', 'mangor'],
    dish: ['panner', 'biryani'],
    seaFood: ['fish']
  }
};

console.log(myAdress)



let person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function () {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function () {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};

console.log(person.age)
console.log(person['age'])


function getMyInformation() {
  var myName = 'Test';
  console.log('insde function' + myName)
}

console.log('outside function' + myName)

getMyInformation();




let person = {
  id: 1,
  name: "john",
  age: {
    'above20': 50,
    'below50': 20
  }
}

console(person.age);