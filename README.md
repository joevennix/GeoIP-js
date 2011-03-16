# GeoIP.js
### A fast IP Address geocoder for node.js

> What is it?

GeoIP.js is a simple, three method class that allows you to enter an IP address and get back a latitude/longitude.

> How does it work?

GeoIP.js works by providing v8->C++ glue code that interfaces with the [free MaxMind geocoding library](http://www.maxmind.com/app/c).

### Installation
1. Download the MaxMind C API from [here](http://www.maxmind.com/app/c).

2. Install the MaxMind C API:

	wget http://geolite.maxmind.com/download/geoip/api/c/GeoIP-1.4.6.tar.gz  
	tar -xvzf GeoIP-1.4.6.tar.gz  
	cd GeoIP-1.4.6  
	./configure  
	make  
	sudo make install

   Note: 'sudo make install' also installs a few command line programs: geoiplookup, geoiplookup6, and geoipupdate. You probably don't want them. To remove them, just delete them from '/usr/local/bin/'.

3. Download this project and build it:
	<pre>git clone git@github.com:joevennix/GeoIP-js.git  
	cd GeoIP-JS  
	node-waf configure build</pre>

4. Download the MaxMind Geocoding Database file, [GeoLiteCity.dat.gz](http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz). Un-gzip this file and stick it where ever you want.

5. That's it! Let's look at some code:
	<pre>var geo = require('./GeoIP-JS/geoip.js');  
	geo.open({ cache: true, filename: './geoip/GeoLiteCity.dat'});  
	var coord = geo.lookup('74.125.227.16');  
	console.log(coord);  
	geo.close();</pre>
