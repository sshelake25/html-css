
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

//console.log(myAdress)
var myWord = "Hummingbird";
var myLetter = myWord [ myWord.length - 3 ];
console.log(myLetter)

/*var no = "100";
console.log(no+1);
console.log("  "+no++);
console.log(1+no);
console.log(++no);

myName = "Rahul";
console.log("Hello, my name is + myName +, what is your name?");

function myFunction(num)
{
    return num *= 2;
}
console.log(myFunction(myFunction(3)));

function myNetPrice(price,tax=0.1,discount=0.1)
{
    var NetPrice = price - price * discount;
    NetPrice = NetPrice + NetPrice * tax;
    return NetPrice;

}
console.log(myNetPrice(100,0.2,0.1));
console.log(myNetPrice(100,0.1,0));
console.log(myNetPrice(100,0.3,0.2));
console.log(myNetPrice(100));

var rent = 5000;
function rentval(other)
{
    var rent = other + 2500;
    return rent;
}

rentval(500);
console.log(rent);*/


/*function howMany(val)
{
    var answer = "";
    switch(val)
    {
        case 1:
            answer = "ek number";
            break;
        case "1":
            answer = "ek string";
            break;
        case "L":
            answer = "ek letter";
            break;
    }
    return answer;
}
console.log(howMany(1));
console.log(howMany("1"));
console.log(howMany(10-9));
console.log(howMany("L"));*/

/*var arr = [
    [1,2],[3,4],[5,6]
];
for(var i=0; i<arr.length; i++)
{
    for(var j=0; j<arr[i].length;j++)
    {
        console.log(arr[i][j]);
    }
}*/

/*function multiply(arr,n)
{
    if(n<=0)
    {
        return 1;
    }else
    {
        return multiply(arr,n-1)*arr[n-1];
    }
}
console.log(multiply([1,2,3,4,5],5));
console.log(multiply([1,2,3,4,5],4));
console.log(multiply([1,2,3,4,5],3));
console.log(multiply([5,3,4,2,1],2));*/

for(var i=0; i<4; i++)
{
    for(var j=0; j<=4;j++)
    {
        console.log("*");
    }
}

// var ourArray = [];
// var i =0;
// do{
//     ourArray.push(i);
//     i++;
// }while(i<5);
// console.log(ourArray);

var ourArray = [];
for(var i=10; i>0; i-=2)
{
    ourArray.push(i);
}
console.log(ourArray);