var Car = /** @class */ (function () {
    function Car(w) {
        this.wheels = 4;
        this.staining = 1;
        this.color = 'black';
        this.wheels = w;
    }
    Car.prototype.getMyCarWheels = function () {
        console.log("My car has " + this.wheels + " wheels and running fast");
    };
    return Car;
}());
var tataCar = new Car(6);
tataCar.getMyCarWheels();
///======================================
// class Person {
//     firstName = "";
//     lastName = "";
//     adderss = "Abc, area";
//     constructor(f, l) {
//         //initalization per
//         this.firstName = f;
//         this.lastName = l;
//     }
//     name() {
//         return `${this.firstName} ${this.lastName} and my adress is ${this.adderss}`;
//     }
//     whoAreYou() {
//         return `Hi i'm ${this.name()}`; (5)
//     }
//     getMyfullAdress() {
//         return this.adderss + "BNGare";
//     }
//     getMyAdressAndContact() {
//        return this.getMyfullAdress() + " 9090909090";
//     }
// }
// let john = new Person("Johana","Harry");
// let hru = john.whoAreYou();
// console.log(hru)
