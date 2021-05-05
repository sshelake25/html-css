class Car
{
    address:string = "vitthai building, ganesh nagar, wadagaonsheri";
    wheels:number = 4;
    staring = 1;
    color = "pink";

    constructor(w?:any)
    {
        this.wheels =w;
    }
    getMyWheels()
    {
        console.log(`My car has ${this.wheels} and color is ${this.color}`);
    }

}
let obj = new Car("4 wheels");
obj.getMyWheels();