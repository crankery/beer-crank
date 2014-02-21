function BeerStyle(name, categoryNumber, ogmin, ogmax, fgmin, fgmax, abvmin, abvmax, ibumin, ibumax, srmmin, srmmax) {
    this.name = name;
	this.categoryNumber = categoryNumber;
    this.ogmin = ogmin;
    this.ogmax = ogmax;
    this.fgmin = fgmin;
    this.fgmax = fgmax;
    this.abvmin = abvmin;
    this.abvmax = abvmax;
    this.ibumin = ibumin;
    this.ibumax = ibumax;
    this.srmmin = srmmin;
    this.srmmax = srmmax;

    this.getCategoryNumber = function() {
    	return categoryNumber.substring(0, categoryNumber.length - 1);
    }

    this.getCategory = function() {
    	return BeerCategory.BeerCategories[this.getCategoryNumber() - 1];
    }
}

BeerStyle.BeerStyles = [
	new BeerStyle("Lite American Lager", "1A", 1.028, 1.04, 0.998, 1.008, 2.8, 4.2, 8, 12, 2, 3),
	new BeerStyle("Standard American Lager", "1B", 1.04, 1.05, 1.004, 1.01, 4.2, 5.3, 8, 15, 2, 4),
	new BeerStyle("Premium American Lager", "1C", 1.046, 1.056, 1.008, 1.012, 4.6, 6, 15, 25, 2, 6),
	new BeerStyle("Munich Helles", "1D", 1.045, 1.051, 1.008, 1.012, 4.7, 5.4, 16, 22, 3, 5),
	new BeerStyle("Dortmunder Export", "1E", 1.048, 1.056, 1.01, 1.015, 4.8, 6, 23, 30, 4, 6),
	new BeerStyle("German Pilsner (Pils)", "2A", 1.044, 1.05, 1.008, 1.013, 4.4, 5.2, 25, 45, 2, 5),
	new BeerStyle("Bohemian Pilsener", "2B", 1.044, 1.056, 1.013, 1.017, 4.2, 5.4, 35, 45, 3.5, 6),
	new BeerStyle("Classic American Pilsner", "2C", 1.044, 1.06, 1.01, 1.015, 4.5, 6, 25, 40, 3, 6),
	new BeerStyle("Vienna Lager", "3A", 1.046, 1.052, 1.010, 1.014, 4.5, 5.5, 18, 30, 10, 16),
	new BeerStyle("Oktoberfest", "3B", 1.050, 1.057, 1.012, 1.016, 4.8, 5.7, 20, 28, 7, 14),
	new BeerStyle("Dark American Lager", "4A", 1.044, 1.056, 1.008, 1.012, 4.2, 6, 8, 20, 14, 22),
	new BeerStyle("Munich Dunkel", "4B", 1.048, 1.056, 1.01, 1.016, 4.5, 5.6, 18, 28, 14, 28),
	new BeerStyle("Schwarzbier (Black Beer)", "4C", 1.046, 1.052, 1.01, 1.016, 4.4, 5.4, 22, 32, 17, 30),
	new BeerStyle("Maibock/Helles Bock", "5A", 1.064, 1.072, 1.011, 1.018, 6.3, 7.4, 23, 35, 6, 11),
	new BeerStyle("Traditional Bock", "5B", 1.064, 1.072, 1.013, 1.019, 6.3, 7.2, 20, 27, 14, 22),
	new BeerStyle("Doppelbock", "5C", 1.072, 1.112, 1.016, 1.024, 7, 10, 16, 26, 6, 25),
	new BeerStyle("Eisbock", "5D", 1.078, 1.12, 1.02, 1.035, 9, 14, 25, 35, 18, 30),
	new BeerStyle("Cream Ale", "6A", 1.042, 1.055, 1.006, 1.012, 4.2, 5.6, 15, 20, 2.5, 5),
	new BeerStyle("Blonde Ale", "6B", 1.038, 1.054, 1.008, 1.013, 3.8, 5.5, 15, 28, 3, 6),
	new BeerStyle("Kölsch", "6C", 1.044, 1.05, 1.007, 1.011, 4.4, 5.2, 20, 30, 3.5, 5),
	new BeerStyle("American Wheat or Rye Beer", "6D", 1.04, 1.055, 1.008, 1.013, 4, 5.5, 15, 30, 3, 6),
	new BeerStyle("Northern German Altbier", "7A", 1.046, 1.054, 1.01, 1.015, 4.5, 5.2, 25, 40, 13, 19),
	new BeerStyle("California Common Beer", "7B", 1.048, 1.054, 1.011, 1.014, 4.5, 5.5, 30, 45, 10, 14),
	new BeerStyle("Düsseldorf Altbier", "7C", 1.046, 1.054, 1.01, 1.015, 4.5, 5.2, 35, 50, 11, 17),
	new BeerStyle("Standard/Ordinary Bitter", "8A", 1.032, 1.04, 1.007, 1.011, 3.2, 3.8, 25, 35, 4, 14),
	new BeerStyle("Special/Best/Premium Bitter", "8B", 1.04, 1.048, 1.008, 1.012, 3.8, 4.6, 25, 40, 5, 16),
	new BeerStyle("Extra Special/Strong Bitter (English Pale Ale)", "8C", 1.048, 1.06, 1.01, 1.016, 4.6, 6.2, 30, 50, 6, 18),
	new BeerStyle("Scottish Light 60/-", "9A", 1.03, 1.035, 1.01, 1.013, 2.5, 3.2, 10, 20, 9, 17),
	new BeerStyle("Scottish Heavy 70/-", "9B", 1.035, 1.04, 1.01, 1.015, 3.2, 3.9, 10, 25, 9, 17),
	new BeerStyle("Scottish Export 80/-", "9C", 1.04, 1.054, 1.01, 1.016, 3.9, 5, 15, 30, 9, 17),
	new BeerStyle("Irish Red Ale", "9D", 1.044, 1.06, 1.01, 1.014, 4, 6, 17, 28, 9, 18),
	new BeerStyle("Strong Scotch Ale", "9E", 1.07, 1.13, 1.018, 1.056, 6.5, 10, 17, 35, 14, 25),
	new BeerStyle("American Pale Ale", "10A", 1.045, 1.06, 1.01, 1.015, 4.5, 6.2, 30, 45, 5, 14),
	new BeerStyle("American Amber Ale", "10B", 1.045, 1.06, 1.01, 1.015, 4.5, 6.2, 25, 40, 10, 17),
	new BeerStyle("American Brown Ale", "10C", 1.045, 1.06, 1.01, 1.016, 4.3, 6.2, 20, 40, 18, 35),
	new BeerStyle("Mild", "11A", 1.03, 1.038, 1.008, 1.013, 2.8, 4.5, 10, 25, 12, 25),
	new BeerStyle("Southern English Brown", "11B", 1.033, 1.042, 1.011, 1.014, 2.8, 4.1, 12, 20, 19, 35),
	new BeerStyle("Northern English Brown", "11C", 1.04, 1.052, 1.008, 1.013, 4.2, 5.4, 20, 30, 12, 22),
	new BeerStyle("Brown Porter", "12A", 1.04, 1.052, 1.008, 1.014, 4, 5.4, 18, 35, 20, 30),
	new BeerStyle("Robust Porter", "12B", 1.048, 1.065, 1.012, 1.016, 4.8, 6.5, 25, 50, 22, 35),
	new BeerStyle("Baltic Porter", "12C", 1.06, 1.09, 1.016, 1.024, 5.5, 9.5, 20, 40, 17, 30),
	new BeerStyle("Dry Stout", "13A", 1.036, 1.05, 1.007, 1.011, 4, 5, 30, 45, 25, 40),
	new BeerStyle("Sweet Stout", "13B", 1.044, 1.06, 1.012, 1.024, 4, 6, 20, 40, 30, 40),
	new BeerStyle("Oatmeal Stout", "13C", 1.048, 1.065, 1.01, 1.018, 4.2, 5.9, 25, 40, 22, 40),
	new BeerStyle("Foreign Extra Stout", "13D", 1.056, 1.075, 1.01, 1.018, 5.5, 8, 30, 70, 30, 40),
	new BeerStyle("American Stout", "13E", 1.05, 1.075, 1.01, 1.022, 5, 7, 35, 75, 30, 40),
	new BeerStyle("Russian Imperial Stout", "13F", 1.075, 1.115, 1.018, 1.03, 8, 12, 50, 90, 30, 40),
	new BeerStyle("English IPA", "14A", 1.05, 1.075, 1.01, 1.018, 5, 7.5, 40, 60, 8, 14),
	new BeerStyle("American IPA", "14B", 1.056, 1.075, 1.01, 1.018, 5.5, 7.5, 40, 70, 6, 15),
	new BeerStyle("Imperial IPA", "14C", 1.07, 1.09, 1.01, 1.02, 7.5, 10, 60, 120, 8, 15),
	new BeerStyle("Weizen/Weissbier", "15A", 1.044, 1.052, 1.01, 1.014, 4.3, 5.6, 8, 15, 2, 8),
	new BeerStyle("Dunkelweizen", "15B", 1.044, 1.056, 1.01, 1.014, 4.3, 5.6, 10, 18, 14, 23),
	new BeerStyle("Weizenbock", "15C", 1.064, 1.09, 1.015, 1.022, 6.5, 8, 15, 30, 12, 25),
	new BeerStyle("Roggenbier (German Rye Beer)", "15D", 1.046, 1.056, 1.01, 1.014, 4.5, 6, 10, 20, 14, 19),
	new BeerStyle("Witbier", "16A", 1.044, 1.052, 1.008, 1.012, 4.5, 5.5, 10, 20, 2, 4),
	new BeerStyle("Belgian Pale Ale", "16B", 1.048, 1.054, 1.01, 1.014, 4.8, 5.5, 20, 30, 8, 14),
	new BeerStyle("Saison", "16C", 1.048, 1.065, 1.002, 1.012, 5, 7, 20, 35, 5, 14),
	new BeerStyle("Bière de Garde", "16D", 1.06, 1.08, 1.008, 1.016, 6, 8.5, 18, 28, 6, 19),
	//new BeerStyle("Belgian Specialty Ale", "16E", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	new BeerStyle("Berliner Weisse", "17A", 1.028, 1.032, 1.003, 1.006, 2.8, 3.8, 3, 8, 2, 3),
	new BeerStyle("Flanders Red Ale", "17B", 1.048, 1.057, 1.002, 1.012, 4.6, 6.5, 10, 25, 10, 16),
	new BeerStyle("Flanders Brown Ale/Oud Bruin", "17C", 1.04, 1.074, 1.008, 1.012, 4, 8, 20, 25, 15, 22),
	new BeerStyle("Straight (Unblended) Lambic", "17D", 1.04, 1.054, 1.001, 1.01, 5, 6.5, 0, 10, 3, 7),
	new BeerStyle("Gueuze", "17E", 1.04, 1.06, 1, 1.006, 5, 8, 0, 10, 3, 7),
	//new BeerStyle("Fruit Lambic", "17F", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	new BeerStyle("Belgian Blond Ale", "18A", 1.062, 1.075, 1.008, 1.018, 6, 7.5, 15, 30, 4, 7),
	new BeerStyle("Belgian Dubbel", "18B", 1.062, 1.075, 1.008, 1.018, 6, 7.6, 15, 25, 10, 17),
	new BeerStyle("Belgian Tripel", "18C", 1.075, 1.085, 1.008, 1.014, 7.5, 9.5, 20, 40, 4.5, 7),
	new BeerStyle("Belgian Golden Strong Ale", "18D", 1.07, 1.095, 1.005, 1.016, 7.5, 10.5, 22, 35, 3, 6),
	new BeerStyle("Belgian Dark Strong Ale", "18E", 1.075, 1.11, 1.01, 1.024, 8, 11, 20, 35, 12, 22),
	new BeerStyle("Old Ale", "19A", 1.06, 1.09, 1.015, 1.022, 6, 9, 30, 60, 10, 22),
	new BeerStyle("English Barleywine", "19B", 1.08, 1.12, 1.018, 1.03, 8, 12, 35, 70, 8, 22),
	new BeerStyle("American Barleywine", "19C", 1.08, 1.12, 1.016, 1.03, 8, 12, 50, 120, 10, 19),
	//new BeerStyle("Fruit Beer", "20", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	//new BeerStyle("Spice, Herb, or Vegetable Beer", "21A", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	//new BeerStyle("Christmas/Winter Specialty Spiced Beer", "21B", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	new BeerStyle("Classic Rauchbier", "22A", 1.05, 1.057, 1.012, 1.016, 4.8, 6, 20, 30, 12, 22),
	//new BeerStyle("Other Smoked Beer", "22B", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	//new BeerStyle("Wood-Aged Beer", "22C", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	//new BeerStyle("Specialty Beer", "23", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
];

function BeerCategory(number, name) {
	this.number = number;
	this.name = name;

	this.getStyles = function() {
		var styles = [];

		for(var i = 0; i < BeerStyle.BeerStyles.length; i++) {
			if (BeerStyle.BeerStyles[i].getCategoryNumber() == this.number) {
				styles.push(BeerStyle.BeerStyles[i]);
			}
		}

		return styles;
	}
}

BeerCategory.BeerCategories = [
	new BeerCategory( 1, "Light Lager"),
	new BeerCategory( 2, "Pilsner"),
	new BeerCategory( 3, "European Amber Lager"),
	new BeerCategory( 4, "Dark Lager"),
	new BeerCategory( 5, "Bock"),
	new BeerCategory( 6, "Light Hybrid Beer"),
	new BeerCategory( 7, "Amber Hybrid Beer"),
	new BeerCategory( 8, "English Pale Ale"),
	new BeerCategory( 9, "Scottish & Irish Ale"),
	new BeerCategory(10, "American Ale"),
	new BeerCategory(11, "English Brown Ale"),
	new BeerCategory(12, "Porter"),
	new BeerCategory(13, "Stout"),
	new BeerCategory(14, "India Pale Ale"),
	new BeerCategory(15, "German Wheat & Rye Beer"),
	new BeerCategory(16, "Belgian & French Ale"),
	new BeerCategory(17, "Sour Ale"),
	new BeerCategory(18, "Belgian Strong Ale"),
	new BeerCategory(19, "Strong Ale"),
	new BeerCategory(20, "Fruit Beer"),
	new BeerCategory(21, "Spice / Herb / Vegetable Beer"),
	new BeerCategory(22, "Smoke-flavored & Wood-Aged Beer"),
	new BeerCategory(23, "Specialty Beer")	 
];