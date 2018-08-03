require(["dojo/_base/lang", "dojo/json"], function(lang, JSON){

    var defaultSettings = {
        useTheForce: true,
        isEvil: false,
        length: 75,
        color: 'blue',
        type: "0"
    };

    function Lightsaber(settings){
        // `defaultSettings` is first mixed into the blank object,
        // then `settings` is mixed into the blank object, overriding
        // any properties from `defaultSettings` without altering
        // the `defaultSettings` object
        this.settings = lang.mixin({}, defaultSettings, settings);
    }

    var darthsaber = new Lightsaber({
        isEvil: true,
        color: 'red',
        type: "5"
    });

    // { useTheForce: true, isEvil: true, length: 75, color: "red" }
    console.log("darthsaber:\n", JSON.stringify(darthsaber.settings, null, '\t'));
});