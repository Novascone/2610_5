let date = new Date();
let APIkey = 'api_key=gPB4u9oxdyL_XAHP7Sgn';
let start = `start_date=2019-${ date.getMonth() }-${ date.getDate() - 2}`;
let	end = `end_date=2019-${ date.getMonth() } -${ date.getDate() }`;






var formParamString = function() {
	let argsArray = Array.from(arguments);
	let url = argsArray.shift();
	return `${url}?{argsArray.join('&')}`;
}

var nStyle = function (url) {
	console.log(`Fetching ${url}`);

	var jPromise = function(promise) {
		return promise.json();
	}

	var here = function(json) {
		hereData = json;
		document.tittle = hereData.dataset.name;
	}

	var promise0 = fetch(url);

	var promise1 = promise0.then(jPromise);

	promise1.then(here);
}

var fStyle = function(url) {
	console.log(`Fetching ${url}`);

	fetch(url)
		.then(r => r.jason())

		.then(json => {

			hereData = json;
			document.title = hereData.dataset.name;
		});
}

var hereData;


var fetch = function() {
    var conversionURL = "http://127.0.0.1:8000/unitconv/convert?from=lbs&to=t_oz&value=3.14";
    var conv = new XMLHttpRequest();
    conv.open('GET', conversionURL);
    conv.responseType = 'json';
    conv.send();
    conv.onload = function() {
        var CResponse = conv.response;
        if (CResponse == null || 'error' in CResponse) {
            document.getElementById("res").innerHTML = CResponse["error"];
        }
        else {
            document.getElementById("res").innerHTML = '$' + (price * Number(CResponse["value"])).toFixed(2);
        }
    }
}
