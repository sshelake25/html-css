
class Company { //start point
    title: string = "BAC";

    constructor() { 
        //for initli peropse
    }

    getMyempoyess() {

    }
   
    getMyCmpoiner

}// ending body of class

let c1 = new Company();
let c2 = new Company();
let c3 = new Company();



class Car {
    wheels: number = 4; // default
    staring: string = '1';
    color: boolean = true;
    address: string = "BAG, ABC area";
    howmany: any = "dasda";

    constructor(w?: number) {
        this.wheels = w;
    }
 
    getMyCarWheels() {
        console.log(`My car has ${this.wheels} wheels and running fast`);
    }
     
    addWheel(number) {
        return this.wheels + number; 
    }
}

let tataCar = new Car(2);
tataCar.getMyCarWheels();













//======================================
class Person {
    firstName = "";
    lastName = "";
    adderss = "Abc, area";

    constructor(f, l) {
        //initalization per
        this.firstName = f;
        this.lastName = l;
    }

    name() {
        return `${this.firstName} ${this.lastName} and my adress is ${this.adderss}`;
    }

    whoAreYou() {
        return `Hi i'm ${this.name()}`; (5)
    }

    getMyfullAdress() {
        return this.adderss + "BNGare";
    }

    getMyAdressAndContact() {
       return this.getMyfullAdress() + " 9090909090";
    }
}

let john = new Person("Johana","Harry");
let hru = john.whoAreYou();
console.log(hru)
