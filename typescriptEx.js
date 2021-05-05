var Car = /** @class */ (function () {
    function Car(w) {
        this.address = "vitthai building, ganesh nagar, wadagaonsheri";
        this.wheels = 4;
        this.staring = 1;
        this.color = "pink";
        this.wheels = w;
    }
    Car.prototype.getMyWheels = function () {
        console.log("My car has " + this.wheels + " and color is " + this.color);
    };
    return Car;
}());
var obj = new Car("4 wheels");
obj.getMyWheels();
