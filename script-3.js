// level 0
const vehicle = new function() {
    this.start = function() {
        console.log("Your vehicle starts to move");
    };
    this.stop = function() {
        console.log("Your vehicle starts to slow down");
    }
}
//level 1
const bike = new function () {
    this.ringBell = function() {
    console.log("Jingle, jingle");
    };
    this.doWheelie = function() {
        console.log("Damn, you are so cool!");
    }
}
const car = new function () {
    this.startEngine = function() {
        console.log("Engine starts working");
    };
    this.stopEngine = function() {
        console.log("Engine stops running");
    }
}
bike.prototype = vehicle;
car.prototype = vehicle;
//level 2
const electricBike = new function() {
    this.recharge = function() {
        console.log("Your electric bike has been recharged!");
    };
    this.brag = function() {
        console.log("You've bragged about how cool your electric bike is!");
    }
}
const bmxBike = new function() {
    this.doFlip = function() {
        console.log("DO A FLIP!");
    };
    this.do360 = function() {
        console.log("Damn, you've failed miserably!");
    }
}
// lol
const sportsCar = new function() {
    this.goFast = function() {
        console.log("You ride faster, than before (not really)");
    };
    this.goToAutoRepairShop = new function() {
        console.log("Repairing those sports cars costs a fortune! Now you are broke!");
    }
}
const truck = new function() {
    this.bigCar = function() {
        console.log("This is a big car!");
    };
    this.veryBigCar = function() {
        console.log("I mean this is a really big car!");
    }
}
//bruh
bike.prototype.start = function() { console.log("Your vehicle opens a new continent");}
bike.prototype.stop = function() { console.log("Your vehicle stops the Earth's rotation");}
car.prototype.start = function() { console.log("Your vehicle disappears out of existence");}
car.prototype.stop = function() { console.log("Your vehicle does something");}
electricBike.prototype = bike;
bmxBike.prototype = bike;
sportsCar.prototype = car;
truck.prototype = car;