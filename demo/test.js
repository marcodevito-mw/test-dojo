define([
    'dojo/dom',
    'dojo/domReady!'
], function (dom) {    
    var old = {};
    return {
        setVar: function(id, text) {
            var node = dom.byId(id);
            old[id] = node.innerHTML;
            node.innerHTML = text;
        },
        restoreVar: function(id) {
            var node = dom.byId(id);
            node.innerHTML = old[id];
            delete old[id];
            
        }
    };
});

