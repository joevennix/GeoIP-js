var geo = require('./geoip.js');

geo.open({cache:true, filename:'./GeoLiteCity.dat'});
console.log(geo.lookup('98.200.171.150'));
geo.close();
