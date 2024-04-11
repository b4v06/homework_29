// level 0
const vehicle = {
    start() {
        console.log("Your vehicle starts to move");
    },
    stop() {
        console.log("Your vehicle starts to slow down");
    }
}
// level 1
const bike = {
    ringBell() {
        console.log("Jingle, jingle");
    },
    doWheelie() {
        console.log("Damn, you are so cool!");
    }
}
const car = {
    startEngine() {
        console.log("Engine starts working");
    },
    stopEngine() {
        console.log("Engine stops running");
    }
}
Object.setPrototypeOf(bike, vehicle);
Object.setPrototypeOf(car, vehicle);
// level 2
const electricBike = {
    recharge() {
        console.log("Your electric bike has been recharged!");
    },
    brag() {
        console.log("You've bragged about how cool your electric bike is!");
    }
}
const bmxBike = {
    doFlip() {
        console.log("DO A FLIP!");
    },
    do360() {
        console.log("Damn, you've failed miserably!");
    }
}
//lol
const sportsCar = {
    goFast() {
        console.log("You ride faster, than before (not really)");
    },
    goToAutoRepairShop() {
        console.log("Repairing those sports cars costs a fortune! Now you are broke!");
    }
}
const truck = {
    bigCar() {
        console.log("This is a big car!");
    },
    veryBigCar() {
        console.log("I mean this is a really big car!");
    }
}

Object.setPrototypeOf(electricBike, bike);
Object.setPrototypeOf(bmxBike, bike);
Object.setPrototypeOf(sportsCar, car);
Object.setPrototypeOf(truck, car);