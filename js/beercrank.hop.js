function Hop(name, country, percentAlphaAcids) {
    this.name = name;
	this.country = country;
    this.percentAlphaAcids = percentAlphaAcids;
}

// http://byo.com/resources/hops
// http://en.wikipedia.org/wiki/List_of_hop_varieties (there's a nice table at the bottom :)

Hop.Hops = [
	new Hop("Admiral", "England", 14.75),
	new Hop("Ahtanum™", "U.S.", 6),
	new Hop("Amarillo", "U.S.", 9.5),
	new Hop("Apollo", "U.S.", 20.5),
	new Hop("Bramling Cross", "England", 6),
	new Hop("Brewer's Gold", "England", 9.2),
	new Hop("Bullion", "England", 7.75),
	new Hop("Cascade", "U.S.", 5.25),
	new Hop("Centennial", "U.S.", 10.5),
	new Hop("Challenger", "England", 7.5),
	new Hop("Chinook", "U.S.", 13),
	new Hop("Citra®", "U.S.", 12),
	new Hop("Cluster", "U.S.", 7),
	new Hop("Columbus", "U.S.", 16),
	new Hop("Crystal", "U.S.", 4.5),
	new Hop("Eroica", "U.S.", 10.5),
	new Hop("First Gold", "England", 7.5),
	new Hop("Feux-Coeur Francais", "Australia", 4.3),
	new Hop("Fuggles", "England", 4.75),
	new Hop("Galaxy", "Australia", 14.9),
	new Hop("Galena", "U.S.", 13),
	new Hop("Glacier", "U.S.", 5.5),
	new Hop("Goldings", "England", 4.75),
	new Hop("Green Bullet", "New Zealand", 12.5),
	new Hop("Greenburg", "U.S.", 5.2),
	new Hop("Hallertau / Hallertauer Mittelfrüh", "Germany", 4.5),
	new Hop("Herald", "England", 12),
	new Hop("Herkules", "Germany", 14.5),
	new Hop("Hersbrucker", "Germany", 4.25),
	new Hop("Horizon", "U.S.", 12),
	new Hop("Liberty", "U.S.", 4),
	new Hop("Lublin", "Poland", 4),
	new Hop("Magnum", "Germany", 11.3),
	new Hop("Merkur", "Germany", 5.25),
	new Hop("Millennium", "U.S.", 15.5),
	new Hop("Motueka", "New Zealand", 7),
	new Hop("Mosaic™", "U.S.", 12.5),
	new Hop("Mount Hood", "U.S.", 6.5),
	new Hop("Mount Rainier", "U.S.", 6),
	new Hop("Nelson Sauvin", "New Zealand", 13),
	new Hop("Newport", "U.S.", 13.5),
	new Hop("Northdown", "England", 8.5),
	new Hop("Northern Brewer", "England", 9),
	new Hop("Nugget", "U.S.", 13),
	new Hop("Opal", "Germany", 4.5),
	new Hop("Pacifica", "New Zealand", 5.5),
	new Hop("Pacific Gem", "New Zealand", 15),
	new Hop("Pacific Jade", "New Zealand", 13),
	new Hop("Palisade®", "U.S.", 8),
	new Hop("Perle", "Germany", 8),
	new Hop("Phoenix", "England", 11),
	new Hop("Pilgrim", "England", 11),
	new Hop("Pilot", "England", 10.5),
	new Hop("Pioneer", "England", 9),
	new Hop("Polnischer Lublin", "Poland", 3.75),
	new Hop("Pride of Ringwood", "Australia", 8.5),
	new Hop("Progress", "England", 6),
	new Hop("Riwaka", "New Zealand", 5.5),
	new Hop("Saaz", "Czech Republic", 3.75),
	new Hop("San Juan Ruby Red", "U.S.", 7.01),
	new Hop("Santiam", "U.S.", 6),
	new Hop("Saphir", "Germany", 3.25),
	new Hop("Satus", "U.S.", 13.25),
	new Hop("Select", "Germany", 5),
	new Hop("Simcoe®", "U.S.", 13),
	new Hop("Smaragd", "Germany", 4.5),
	new Hop("Sorachi Ace", "Japan", 13),
	new Hop("Southern Cross", "New Zealand", 12.5),
	new Hop("Spalt", "Germany", 4.5),
	new Hop("Sterling", "U.S.", 7.5),
	new Hop("Strisselspalt", "France", 4),
	new Hop("Styrian Aurora", "Slovenia", 8.25),
	new Hop("Styrian Bobek", "Slovenia", 5.25),
	new Hop("Styrian Goldings", "Slovenia", 5.25),
	new Hop("Styrian Celeia", "Slovenia", 4.5),
	new Hop("Summit", "U.S.", 18),
	new Hop("Tardif de Bourgogne", "France", 4.3),
	new Hop("Target", "England", 11),
	new Hop("Taurus", "Germany", 5),
	new Hop("Tettnang", "Germany", 4.5),
	new Hop("Tomahawk", "U.S.", 16),
	new Hop("Tradition", "Germany", 6),
	new Hop("Ultra", "U.S.", 4.75),
	new Hop("Vanguard", "U.S.", 5.75),
	new Hop("Waimea", "New Zealand", 17.5),
	new Hop("Warrior®", "U.S.", 16),
	new Hop("Whitbread Golding Variety (WGV)", "England", 6.5),
	new Hop("Willamette", "U.S.", 5),
	new Hop("Zeus", "U.S.", 15)
];

function HopUtil(){
}

HopUtil.UtilizationMatrix = [
    [ 0.000, 0.055, 0.100, 0.137, 0.167, 0.192, 0.212 ,0.229, 0.242, 0.253, 0.263, 0.270, 0.276, 0.276, 0.285, 0.285, 0.291, 0.291, 0.295, 0.295, 0.298, 0.298, 0.300, 0.300, 0.301, 0.301 ],
    [ 0.000, 0.050, 0.091, 0.125, 0.153, 0.175, 0.194, 0.209, 0.221, 0.232, 0.240, 0.247, 0.252, 0.252, 0.261, 0.261, 0.266, 0.266, 0.270, 0.270, 0.272, 0.272, 0.274, 0.274, 0.275, 0.275 ],
    [ 0.000, 0.046, 0.084, 0.114, 0.140, 0.160, 0.177, 0.191, 0.202, 0.212, 0.219, 0.226, 0.231, 0.231, 0.238, 0.238, 0.243, 0.243, 0.247, 0.247, 0.249, 0.249, 0.251, 0.251, 0.252, 0.252 ], 
    [ 0.000, 0.042, 0.076, 0.105, 0.128, 0.147, 0.162, 0.175, 0.185, 0.194, 0.200, 0.206, 0.211, 0.211, 0.218, 0.218, 0.222, 0.222, 0.226, 0.226, 0.228, 0.228, 0.229, 0.229, 0.230, 0.230 ],
    [ 0.000, 0.038, 0.070, 0.096, 0.117, 0.134, 0.148, 0.160, 0.169, 0.177, 0.183, 0.188, 0.193, 0.193, 0.199, 0.199, 0.203, 0.203, 0.206, 0.206, 0.208, 0.208, 0.209, 0.209, 0.210, 0.210 ],
    [ 0.000, 0.035, 0.064, 0.087, 0.107, 0.122, 0.135, 0.146, 0.155, 0.162, 0.168, 0.172, 0.176, 0.176, 0.182, 0.182, 0.186, 0.186, 0.188, 0.188, 0.190, 0.190, 0.191, 0.191, 0.192, 0.192 ],
    [ 0.000, 0.032, 0.058, 0.080, 0.098, 0.112, 0.124, 0.133, 0.141, 0.148, 0.153, 0.157, 0.161, 0.161, 0.166, 0.166, 0.170, 0.170, 0.172, 0.172, 0.174, 0.174, 0.175, 0.175, 0.176, 0.176 ],
    [ 0.000, 0.029, 0.053, 0.073, 0.089, 0.102, 0.113, 0.122, 0.129, 0.135, 0.140, 0.144, 0.147, 0.147, 0.152, 0.152, 0.155, 0.155, 0.157, 0.157, 0.159, 0.159, 0.160, 0.160, 0.161, 0.161 ],
    [ 0.000, 0.027, 0.049, 0.067, 0.081, 0.094, 0.103, 0.111, 0.118, 0.123, 0.128, 0.132, 0.135, 0.135, 0.139, 0.139, 0.142, 0.142, 0.144, 0.144, 0.145, 0.145, 0.146, 0.146, 0.147, 0.147 ],
    [ 0.000, 0.025, 0.045, 0.061, 0.074, 0.085, 0.094, 0.102, 0.108, 0.113, 0.117, 0.120, 0.123, 0.123, 0.127, 0.127, 0.130, 0.130, 0.132, 0.132, 0.133, 0.133, 0.134, 0.134, 0.134, 0.134 ]
];

HopUtil.getUtilization = function(gravity, duration) {
    // http://www.howtobrew.com/section1/chapter5-5.htm
    // x indexes are gravity: 1.030, 1.040, ..., 1.120
    // y indexes are duration: 0, 5, ..., 120

    // time values are zero to 120 in 5 minute increments
    var timeIndex = Math.min(
        24,
        Math.round(duration / 5));

    // the gravity values are from 1.030 to 1.120 in 0.010 increments
    // adjust gravity from n.xyz to xy by multiplying by 100 and subtracting 100 (the 1.000 part)
    // the first value is 1.030 so subtract 3 from this value and limit it to the length of the array 
    var gravityIndex = Math.min(
        9,
        Math.max(0, Math.round(gravity * 100 - 100) - 3));

    return HopUtil.UtilizationMatrix[gravityIndex][timeIndex];
}
