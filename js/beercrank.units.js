function Units() {
    var system = "US";

    this.volumeToGallons = function(value) {
        switch (system) {
            case "Metric":
                // litre to gallons
                return value / 0.264172;
            case "Imperial":
                // uk gallon to us gallons
                return value / 1.20095;
        }

        return value;
    };

    this.gallonsToVolume = function(value) {
        return this.volumeToGallons(1 / value);
    }

    this.volumeDisplayName = function() {
        if (system == "Metric") {
            return "l";
        }

        return "gal."
    }

    this.maltAmountToPounds = function(value) {
        if (system == "Metric") {
            // kg to pounds
            return  value / 2.20462;
        }

        return value;
    };

    this.poundsToMaltAmount = function(value) {
        return this.maltAmountToPounds(1 / value);
    }

    this.maltAmountDisplayName = function() {
        if (system == "Metric") {
            return "kg";
        }

        return "lb.";
    }

    this.hopAmountToOunces = function(value) {
        if (system == "Metric") {
            // g to oz
            return  value / 1.20095;
        }

        return value;
    };

    this.ouncesToHopAmount = function(value) {
        return hopAmountToOunces(1 / value);
    }

    this.hopAmountDisplayName = function() {
        if (system == "Metric") {
            return "g";
        }

        return "oz.";
    } 
}
