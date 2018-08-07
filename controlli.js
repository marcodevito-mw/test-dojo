require([
    "dojo/dom",
    "dojo/on",
    "dojo/_base/array",
    "dojo/domReady!"
],
function(dom, on, array){
    
    function closeAllValueWidget() {
        console.log("chiudere tutto out")
        array.forEach(widget, function (widget) {
            console.log("chiudere tutto in")
            widget.closeWidget();
        });
        

    }
    on(dom.byId("distruggi"), "click", closeAllValueWidget);
    })
