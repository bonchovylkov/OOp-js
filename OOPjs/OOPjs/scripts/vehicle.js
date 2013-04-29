var vihicleNS = function () {

    function Vehicle(weels, propellingNozzle, propeller) {
        var self = this;
        if (weels) {
            var weelAcceleration = Math.PI * weels.carWeels.radius * 2;
        }

        if (propellingNozzle) {
            if (propellingNozzle.propellingNozzle.afterburnerSwitch) {
                var nozzleAcceleration = propellingNozzle.propellingNozzle.power * 2;
            }
            else {
                var nozzleAcceleration = propellingNozzle.propellingNozzle.power;
            }
        }

        if (propeller) {
            if (propeller.propeller.spinDirection === "clockwise") {
                var propellerAcceleration = propeller.propeller.fin;
            }
            else {
                var propellerAcceleration = -propeller.propeller.fin;
            }
        }
        self.CalcAcceleration = function () {
            var acceleration = weelAcceleration || 0 + nozzleAcceleration || 0 + propellerAcceleration || 0;
            return acceleration;
        }
    }
    function Car(weels) {
        var self = this;
        Vehicle.call(self, weels, null, null);
    }
    Car.prototype = new Vehicle;
    Car.prototype.constructor = Car;

    function AirPlane(propellingNozzle) {
        var self = this;
        var _propellingNozzle = propellingNozzle;
        Vehicle.call(self, null, propellingNozzle, null);
        self.swichAfterburnerON = function () {
            _propellingNozzle.propellingNozzle.afterburnerSwitch = true;
            Vehicle.call(self, null, propellingNozzle, null);
        }
        self.swichAfterburnerOFF = function () {
            _propellingNozzle.propellingNozzle.afterburnerSwitch = false;
            Vehicle.call(self, null, propellingNozzle, null);
        }

    }
    AirPlane.prototype = new Vehicle;
    AirPlane.prototype.constructor = Car;

    function Boat(propeller) {
        var self = this;
        var _properller = propeller;
        Vehicle.call(self, null, null, propeller);
        self.switchFinsClocwise = function () {
            _properller.propeller.spinDirection = "clockwise";
            Vehicle.call(self, null, null, propeller);
        }
        self.switchFinsCounterClockwise = function () {
            _properller.propeller.spinDirection = "counter-clochwise";
            Vehicle.call(self, null, null, propeller);
        }
    }
    Boat.prototype = new Vehicle;
    Boat.prototype.constructor = Boat;

    function AmphybiasVehicle(weels, propeller) {
        var self = this;
        _propeller = propeller;
        Vehicle.call(self, weels, null, null);
        self.swichOnLandMode = function () {
            Vehicle.call(self, weels, null, null);
            landModeOn = true;
            waterModeOn = false;
        }
        self.swichOnWaterMode = function () {
            Vehicle.call(self, null, null, propeller);
            waterModeOn = true;
            landModeOn = false;
        }
        self.switchFinsClocwise = function () {
            if (waterModeOn) {
                _propeller.propeller.spinDirection = "clockwise";
                Vehicle.call(self, null, null, propeller);
            } else {
                console.log("The vehicle is on land mode and cannot switch the propeller direction!");
            }

        }
        self.switchFinsCounterClockwise = function () {
            if (waterModeOn) {
                _propeller.propeller.spinDirection = "counter-clochwise";
                Vehicle.call(self, null, null, propeller);
            } else {
                console.log("The vehicle is on land mode and cannot switch the propeller direction!");
            }

        }
    }
    AmphybiasVehicle.prototype = new Vehicle;
    AmphybiasVehicle.prototype.constructor = AmphybiasVehicle;

    return {
        Vehicle: Vehicle,
        Car: Car,
        AirPlane: AirPlane,
        Boat: Boat,
        AmphybiasVehicle: AmphybiasVehicle
    };
}();




function checkTypeOfVehicle() {
    $(".properties").remove();
    var typeOfSelectedVihicle;
    var allTypesVihicles = document.getElementsByClassName("typeOfVehicle");
    for (var i = 0; i < allTypesVihicles.length; i++) {
        if (allTypesVihicles[i].selected === true) {
            typeOfSelectedVihicle = allTypesVihicles[i].value;
            switch (typeOfSelectedVihicle) {
                case "Car": displayCarInputProperties(); break;
                case "Boat": diplayBoatInputProperties(); break;
                case "AirPlane": displayAriPlaneInputProperties(); break;
                case "AmphybiasVehicle": displayAmphybiasVehicleInputProperties(); break;
            }
        }
    }
}

function displayCarInputProperties() {
    var radius = document.createElement("input");
    radius.type = "text";
    radius.id = "radius";
    radius.className = "properties";
    radius.required = "required";
    var label = document.createElement("label");
    label.innerHTML = "The car have weels write the radius of the weels";
    label.htmlFor = "radius";
    label.className = "properties";
    var form = document.getElementById("vihicleProp");
    form.appendChild(label);
    form.appendChild(radius);
}
function diplayBoatInputProperties() {
    var finsNumber = document.createElement("input");
    finsNumber.id = "fins";
    finsNumber.required = "required";
    finsNumber.className = "properties";
    var label = document.createElement("label");
    label.innerHTML = "The boat have fins write their number";
    label.htmlFor = "fins";
    label.className = "properties";
    var form = document.getElementById("vihicleProp");
    form.appendChild(label);
    form.appendChild(finsNumber);
    var otherLabel = document.createElement("label");
    otherLabel.innerHTML = "The choose the fins direction:";
    otherLabel.htmlFor = "direction";
    otherLabel.className = "properties";
    form.appendChild(otherLabel);
    var finsDirection = document.createElement("select");
    var options = ["clockwise", "counter-clockwise"];
    var optionOne = document.createElement("option");
    optionOne.value = options[0];
    optionOne.text = "clockwise";
    var optionTwo = document.createElement("option");
    optionTwo.value = options[1];
    optionTwo.text = "counter-clockwise";
    finsDirection.className = "properties";
    finsDirection.id = "direction";
    finsDirection.appendChild(optionOne);
    finsDirection.appendChild(optionTwo);
    form.appendChild(finsDirection);
}
function displayAriPlaneInputProperties() {
    var enginePower = document.createElement("input");
    enginePower.className = "properties";
    enginePower.id = "power";
    var label = document.createElement("label");
    label.innerText = "Write how powerfull are the engines:";
    label.htmlFor = "power";
    label.className = "properties";
    var formDisplay = document.getElementById("vihicleProp");
    formDisplay.appendChild(label);
    formDisplay.appendChild(enginePower);
    var afterburnerSwitch = document.createElement("select");
    afterburnerSwitch.className = "properties";
    afterburnerSwitch.id = "switch";
    var optionOn = document.createElement("option");
    optionOn.value = true;
    optionOn.text = "On";
    var optionOff = document.createElement("option");
    optionOff.value = false;
    optionOff.text = "Off";
    var otherLabel = document.createElement("label");
    otherLabel.innerText = "Set the swich of the engines on or off";
    otherLabel.htmlFor = "switch";
    otherLabel.className = "properties";
    formDisplay.appendChild(otherLabel);
    afterburnerSwitch.appendChild(optionOn);
    afterburnerSwitch.appendChild(optionOff);
    formDisplay.appendChild(afterburnerSwitch);
}
function displayAmphybiasVehicleInputProperties() {
    displayCarInputProperties();
    diplayBoatInputProperties();
}

function createTheVehicle() {
    var vehicleName = document.getElementById("name").value;
    var inputValue = document.getElementsByClassName("properties")[1].value | 0;
    if (document.getElementsByTagName("select")[1]) {
        var selectFirstOption = document.getElementsByTagName("select")[1][0].selected;
        if (selectFirstOption) {
            var optionSelected = document.getElementsByTagName("select")[1][0].value;
        }
        var selectSecondOption = document.getElementsByTagName("select")[1][1].selected;
        if (selectSecondOption) {
            var optionSelected = document.getElementsByTagName("select")[1][1].value;
        }
    }
    if (document.getElementsByClassName("properties")[3]) {
        var inputAmphibia = document.getElementsByClassName("properties")[3].value | 0;
    }

    var typeOfSelectedVihicle;
    var allTypesVihicles = document.getElementsByClassName("typeOfVehicle");
    for (var i = 0; i < allTypesVihicles.length; i++) {
        if (allTypesVihicles[i].selected === true) {
            typeOfSelectedVihicle = allTypesVihicles[i].value;
            switch (typeOfSelectedVihicle) {
                case "Car": createCar(vehicleName, inputValue); break;
                case "Boat": createBoat(vehicleName, inputValue, optionSelected); break;
                case "AirPlane": createAirplane(vehicleName, inputValue, optionSelected); break;
                case "AmphybiasVehicle": createAmphybiasVehicle(vehicleName, inputValue,inputAmphibia, optionSelected); break;
            }
        }
    }
}
function createCar(name, weelsRadius) {
    $(".toRemove").remove();
    var car = new vihicleNS.Car({ carWeels: { radius: weelsRadius } })
    var output = document.getElementById("displayVehicle");
    var el = document.createElement("p");
    el.innerHTML = "<strong>Car acceleration by the radius:</strong> " +
        car.CalcAcceleration() + "<br/>" + " <strong>Name</strong>: " + name;
    output.appendChild(el);
    var img = document.createElement("img");
    img.src = "imgs/car.jpg";
    img.alt = "kola";
    img.width = 100;
    output.appendChild(img);
    el.className = "toRemove";
    img.className = "toRemove";
}

function createBoat(name, propellerFinsNumber, finsDirection) {
    $(".toRemove").remove();
    var boat = new vihicleNS.Boat({ propeller: { spinDirection: finsDirection, fin: propellerFinsNumber } });
    var boatName = name;
    var el = document.createElement("p");
    el.innerHTML = "<strong>Boat acceleration by the fins number :</strong> " + boat.CalcAcceleration()
        + "<br/>" + "when the fins direction is " + finsDirection
       + "<br/>" + " <strong>Name</strong>: " + name;
    var output = document.getElementById("displayVehicle");
    output.appendChild(el);
    var img = document.createElement("img");
    img.src = "imgs/boat.jpg";
    img.alt = "boat";
    img.width = 100;
    output.appendChild(img);
    el.className = "toRemove";
    img.className = "toRemove";
}
function createAirplane(name, enginePower, afterburnerSwitchDetector) {
    $(".toRemove").remove();
    var plane = new vihicleNS.AirPlane({ propellingNozzle: { afterburnerSwitch: Boolean(afterburnerSwitchDetector), power: enginePower } });
    var planeName = name;
    var el = document.createElement("p");
    el.innerHTML = "<strong>Plane acceleration by the engine power :</strong> " + plane.CalcAcceleration()
        + "<br/>" + "when the afterburnerSwitch value is: " + afterburnerSwitchDetector
       + "<br/>" + " <strong>Name</strong>: " + name;
    var output = document.getElementById("displayVehicle");
    output.appendChild(el);
    var img = document.createElement("img");
    img.src = "imgs/plane.jpg";
    img.alt = "boat";
    img.width = 100;
    output.appendChild(img);
    el.className = "toRemove";
    img.className = "toRemove";
}
function createAmphybiasVehicle(name, weelsRadius, propellerFins, finsDirection) {
    $(".toRemove").remove();
    var output = document.getElementById("displayVehicle");
    var amphybia = new vihicleNS.AmphybiasVehicle(
          {
              carWeels: { radius: weelsRadius }
          },
          {
              propeller: { spinDirection: finsDirection, fin: propellerFins }
          });
    var amphybiaName = name;
    var el = document.createElement("p");
    el.innerHTML = "<strong>Amphibia acceleration by the weels radius and fins number :</strong> " + amphybia.CalcAcceleration()
        + "<br/>" + "when the afterburnerSwitch value is: " + finsDirection
       + "<br/>" + " <strong>Name</strong>: " + name;
    output.appendChild(el);
    var img = document.createElement("img");
    img.src = "imgs/amph.jpg";
    img.alt = "boat";
    img.width = 100;
    output.appendChild(img);
    el.className = "toRemove";
    img.className = "toRemove";
}

