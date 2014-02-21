angular.module("beercrank.service", []);

angular.module("beercrank.directive", []);

angular.module("beercrank.filter", []);

var App = angular.module("beercrank", [ "beercrank.service", "beercrank.directive", "beercrank.filter", "ui.bootstrap" ]);

App.directive("creditsTemplate", function() {
    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "beercrank.credits.html"
    };
});

App.directive("aboutTemplate", function() {
    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "beercrank.about.html"
    };
});

App.directive("brewhouseTemplate", function() {
    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "beercrank.brewhouse.html"
    };
});

App.directive("maltTemplate", function() {
    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "beercrank.malt.html"
    };
});

App.directive("hopsTemplate", function() {
    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "beercrank.hops.html"
    };
});

function Recipe() {
    this.boilDuration = 60;
    this.boilStartVolume = 6.6;
    this.boilFinalVolume = 5.5;
    this.finalVolume = 5.5;
    this.brewhouseEffeciency = 75;
    this.apparentAttenuation = 75;

    this.maltQuantities = [];
    this.hopAdditions = [];
    this.beerCategory = BeerCategory.BeerCategories[0];
    this.beerStyle = BeerStyle.BeerStyles[0];
}

function MainController($scope) {
    $scope.state = new Recipe();

    $scope.malts = Malt.Malts;
    $scope.beerCategories = BeerCategory.BeerCategories;
    $scope.beerStyles = BeerStyle.BeerStyles;
    $scope.hops = Hop.Hops;

    $scope.dialogOptions = { backdropFade: false, dialogFade: false };
    $scope.showCreditsDialog = false;
    $scope.showAboutDialog = false;

    $scope.fixBeerStyle = function() {
        $scope.state.beerStyle = $scope.state.beerCategory.getStyles()[0];
    }

    $scope.openAboutDialog = function() {
        $scope.showAboutDialog = true;
    };

    $scope.closeAboutDialog = function() {
        $scope.showAboutDialog = false;
    };

    $scope.openCreditsDialog = function() {
        $scope.showCreditsDialog = true;
    };

    $scope.closeCreditsDialog = function() {
        $scope.showCreditsDialog = false;
    };

    // get the volume of the wort after boiling it for duration minutes
    $scope.getVolumeAfterBoiling = function(duration) {
        var loss = $scope.state.boilStartVolume - $scope.state.boilFinalVolume; 
        return $scope.state.boilStartVolume - (loss / $scope.state.boilDuration * duration);
    };

    // add a quanity of malt to the mash
    $scope.addMaltQuantity = function() {
        $scope.state.maltQuantities.push({ malt: Malt.Malts[0], amount: 0.0 });
    };

    // remove a quantity of malt from the mash
    $scope.removeMaltQuantity = function(maltQuantity) {
        $scope.state.maltQuantities.splice($scope.maltQuantities.indexOf(maltQuantity), 1);
    };

    // get the total grain bill amount (weight)
    $scope.getTotalMaltAmount = function() {
        if ($scope.state.maltQuantities.length == 0) {
            return 0;
        }
        
        var sum = $scope.state.maltQuantities.reduce(
            function(previousValue, currentValue, index, array) {
                return { amount: 1*previousValue.amount + 1*currentValue.amount };
            });

        return sum.amount;
    };

    // the the percentage of the overall grain bill represented by a given quantity of malt
    $scope.getMaltQuantityAmountPercent = function(maltQuanity) {
        var total = $scope.getTotalMaltAmount();

        if (total == 0) {
            return 0;
        }

        return maltQuanity.amount / total;
    };

    // get the non-adjusted points granted by a given quantity of malt
    $scope.getNonAdjustedMaltQuantityPoints = function(maltQuantity, volume) {
        if (maltQuantity.malt.potentialGravity == undefined) {
            return 0;
        }

        // we just need the decimals in the potential gravity (of 1.xxx we need xxx)
        return (1000 * (maltQuantity.malt.potentialGravity - 1)) * maltQuantity.amount / volume; 
    };

    // get the adjusted (by brewhouse effeciency) points for a given quantity of malt
    $scope.getMaltQuantityPoints = function(maltQuantity, volume) {
        if (volume == undefined) {
            volume = $scope.state.finalVolume;
        }

        return $scope.getNonAdjustedMaltQuantityPoints(maltQuantity, volume) * $scope.state.brewhouseEffeciency / 100;
    };

    $scope.getTotalPoints = function(volume) {
        if (volume == undefined) {
            volume = $scope.state.finalVolume;
        }

        var sum = 0.0;
        for(var i = 0; i < $scope.state.maltQuantities.length; i++) {
            sum += $scope.getNonAdjustedMaltQuantityPoints($scope.state.maltQuantities[i], volume);
        }

        return sum * $scope.state.brewhouseEffeciency / 100;
    };

    // get the estimated original gravity
    $scope.getEstimatedGravity = function(volume) {
        if (volume == undefined) {
            volume = $scope.state.finalVolume;
        }

        return $scope.getTotalPoints(volume) / 1000 + 1;
    };

    // get the estimated final gravity after attenuation
    $scope.getEstimatedFG = function() {
        var points = ($scope.getEstimatedGravity() - 1) * 1000;
        var attenuatedPoints = points - ($scope.state.apparentAttenuation / 100 * points);
        return attenuatedPoints / 1000 + 1;
    };

    // https://en.wikipedia.org/wiki/Alcohol_by_volume
    $scope.getEstimatedAbv = function() { 
        var og = $scope.getEstimatedGravity();
        var fg = $scope.getEstimatedFG();

        return (1.05 / 0.79) * ((og - fg) / fg);
    };

    // http://brewwiki.com/index.php/Estimating_Color
    $scope.getMaltQuantitySrm = function(maltQuantity) {
        // MCU = (grain_color * grain_weight_lbs)/volume_gallons
        // SRM_Color = 1.4922 * [MCU ^ 0.6859]
        return (maltQuantity.malt.srm * maltQuantity.amount) / $scope.state.finalVolume;
    };

    $scope.getEstimatedSrm = function() {
        var sum = 0;

        for(var i = 0; i < $scope.state.maltQuantities.length; i++) {
            sum += $scope.getMaltQuantitySrm($scope.state.maltQuantities[i]);
        }

        return sum;
    };

    $scope.addHopAddition = function() {    
        $scope.state.hopAdditions.push({ hop: Hop.Hops[0], amount: 0, duration: 0 });
    };

    $scope.removeHopAddition = function(addition) {
        $scope.state.hopAdditions.splice($scope.state.hopAdditions.indexOf(addition), 1);
    };

    $scope.getTotalHopAmount = function() {
        if ($scope.state.hopAdditions.length == 0) {
            return 0;
        }

        var sum = $scope.state.hopAdditions.reduce(
            function(previousValue, currentValue, index, array) {
                return { amount: 1*previousValue.amount + 1*currentValue.amount };
            });

        return sum.amount;    
    };

    $scope.getHopAdditionAmountPercent = function(addition) {
        var total = $scope.getTotalHopAmount();

        if (total == 0) {
            return 0;
        }

        return addition.amount / total;
    };

    $scope.getHopAdditionUtilization = function(addition) {
        var u = HopUtil.getUtilization(
            $scope.getEstimatedGravity(
                $scope.getVolumeAfterBoiling(
                    $scope.state.boilDuration - addition.duration)),
            addition.duration);

        return u;
    }

    $scope.getHopAdditionAau = function(addition) {
        // AAU = Weight (oz) x % Alpha Acids (whole number)
        var aau = 1*addition.amount * addition.hop.percentAlphaAcids;

        return aau;        
    }

    $scope.getHopAdditionIbu = function(addition) {
        // 74.89 converts oz/gal to mg/l
        // IBU = AAU x Utilization x 74.89 / Vrecipe
        var ibu = $scope.getHopAdditionAau(addition) * $scope.getHopAdditionUtilization(addition) * 74.89 / $scope.state.finalVolume;
        return ibu;
    };

    $scope.getTotalIbu = function() {
        var sum = 0;

        for(var i = 0; i < $scope.state.hopAdditions.length; i++) {
            sum += $scope.getHopAdditionIbu($scope.state.hopAdditions[i]);
        }

        return sum;
    };

    $scope.isInStyle = function(value) {
        switch(value) {
            case "og":
                var x = $scope.getEstimatedGravity();

                if (x < $scope.state.beerStyle.ogmin) {
                    return false;
                }

                if (x > $scope.state.beerStyle.ogmax) {
                    return false;
                }

                return true;
            case "fg":
                var x = $scope.getEstimatedFG();

                if (x < $scope.state.beerStyle.fgmin) {
                    return false;
                }

                if (x > $scope.state.beerStyle.fgmax) {
                    return false;
                }

                return true;
            case "abv":
                var x = $scope.getEstimatedAbv();

                if (x < ($scope.state.beerStyle.abvmin / 100)) {
                    return false;
                }

                if (x > ($scope.state.beerStyle.abvmax / 100)) {
                    return false;
                }

                return true;
            case "ibu":
                var x = $scope.getTotalIbu();

                if (x < $scope.state.beerStyle.ibumin) {
                    return false;
                }

                if (x > $scope.state.beerStyle.ibumax) {
                    return false;
                }

                return true;
            case "srm":
                var x = $scope.getEstimatedSrm();

                if (x < $scope.state.beerStyle.srmmin) {
                    return false;
                }

                if (x > $scope.state.beerStyle.srmmax) {
                    return false;
                }

                return true;
        }
    };
}