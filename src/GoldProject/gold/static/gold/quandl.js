let date = new Date();
let APIkey = 'api_key=gPB4u9oxdyL_XAHP7Sgn';
let start = `start_date=2019-${ date.getMonth() }-${ date.getDate() - 2}`;
let	end = `end_date=2019-${ date.getMonth() } -${ date.getDate() }`;


var goldURL = 'https://www.quandl.com/api/v3/datasets/LBMA/GOLD.json?api_key=gPB4u9oxdyL_XAHP7Sgn&column_index=2&start_date=2019-04-3';
var price
window.onload = function() {
    var req  = new XMLHttpRequest();
    req.open('GET', goldURL);
    req.responseType = 'json';
    req.onload = function() {price = req.response.dataset.data[0][1];}
    req.send();
}


var fetch = function() {
    var conversionURL = "http://127.0.0.1:8000/unitconv/convert?from=lbs&to=t_oz&value=" + document.querySelector('#tx').value;
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
