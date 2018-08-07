require([
    "dojo/request",
    "dojo/dom",
    "dojo/_base/array",
    "widget/DatiWidget",
    "dojo/domReady!"
],
    function (request, dom, array, DatiWidget) {
        request("http://data.fixer.io/api/latest?access_key=fe1d77686882e5615e4e175c4b80f0e6", {
            handleAs: "json",
            headers: {
                "X-Requested-With": ""
            }
        }).then(function (dati) {
            console.log(dati);
            var containerWidgetDati = dom.byId("containerWidgetDati");
            var obj = dati.rates;
            var widget = []
            for (var key in obj) {
                var value = { valuta: key, valore: obj[key] };
                widget[key] = new DatiWidget(value).placeAt(containerWidgetDati);
            }
        })
        
    })