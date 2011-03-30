var geo = require('./geoip.js');

geo.open({cache: true, filename: './GeoLiteCity.dat'});
var coord = geo.lookup('74.125.227.16');
console.log(coord);
geo.close();