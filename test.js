var geo = require('./geoip.js');

// Open the database file and cache it
geo.open({cache: true, filename: './GeoLiteCity.dat'});

// Geocode an IP to a coordinate
var coord = geo.lookup('74.125.227.16');
console.log(coord);

// Close the database file, delete cache
geo.close();