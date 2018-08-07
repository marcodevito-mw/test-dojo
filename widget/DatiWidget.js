define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/dom-class",
    "dojo/text!./templates/DatiWidget.html"
], function (declare, _WidgetBase, _TemplatedMixin, domClass, template) {
    return declare([_WidgetBase, _TemplatedMixin], {
        valuta: "nessuna",
        valore: 0,
        trend: "",
        templateString: template,
        baseClass: "widgetDati",
        postCreate: function () {
            this.inherited(arguments);
            this._settaClasse();
        },
        // private methods
        _settaClasse: function () {
            var p = this.params;
            if (p.valore >= 1) {
                domClass.add(this.nodoValore, "green");
            }
            else {
                domClass.add(this.nodoValore, "red");
            }
        }
    });
});