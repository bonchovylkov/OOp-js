//car instance
var BMW = new vihicleNS.Car({ carWeels: { radius: 5 } });
var isIt = BMW instanceof vihicleNS.Vehicle;
console.log("Car acceletation:");
console.log(BMW.CalcAcceleration());
//airplane instance
var Boing747 = new vihicleNS.AirPlane(
    {
        propellingNozzle: { afterburnerSwitch: true, power: 100 }
    });
console.log("Airplane Boing747 acceletation with switch on:");
console.log(Boing747.CalcAcceleration());
Boing747.swichAfterburnerOFF();
console.log("Airplane Boing747 acceletation with switch off:");
console.log(Boing747.CalcAcceleration());

var justAirPlain = new vihicleNS.AirPlane(
    {
        propellingNozzle: { afterburnerSwitch: false, power: 50 }
    });
console.log("Airplane justAirPlain acceletation with switch off:");
console.log(justAirPlain.CalcAcceleration());
justAirPlain.swichAfterburnerON();
console.log("Airplane justAirPlain acceletation with switch on:");
console.log(justAirPlain.CalcAcceleration());

//boat instance
var captainJachShip = new vihicleNS.Boat(
    {
        propeller: { spinDirection: "clockwise", fin: 10 }
    });
console.log("Boat captainJachShip acceletation with clockwise fins:");
console.log(captainJachShip.CalcAcceleration());
captainJachShip.switchFinsCounterClockwise();
console.log("Boat captainJachShip acceletation with counter-clockwise fins:");
console.log(captainJachShip.CalcAcceleration());

var justShip = new vihicleNS.Boat(
    {
        propeller: { spinDirection: "counter-clockwise", fin: 5 }
    });
console.log("Boat justShip acceletation with counter-clockwise fins:");
console.log(justShip.CalcAcceleration());
justShip.switchFinsClocwise();
console.log("Boat justShip acceletation with clockwise fins:");
console.log(justShip.CalcAcceleration());

//amphibious vehicle
var carBoat = new vihicleNS.AmphybiasVehicle(
    {
        carWeels: { radius: 4 }
    },
    {
        propeller: { spinDirection: "clockwise", fin: 10 }
    });
console.log("AmphybiasVehicle carBoat acceletation when it's on weels");
console.log(carBoat.CalcAcceleration());
carBoat.swichOnWaterMode();
console.log("AmphybiasVehicle carBoat acceletation when it's on water with clockwise fins");
console.log(carBoat.CalcAcceleration());
carBoat.switchFinsCounterClockwise();
console.log("AmphybiasVehicle carBoat acceletation when it's on water with counter-clockwise fins");
console.log(carBoat.CalcAcceleration());
carBoat.swichOnLandMode();
console.log("trying to switch the fins when the carboat is on land mode :");
carBoat.switchFinsClocwise();