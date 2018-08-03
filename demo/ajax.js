require(["dojo/request"], function(request){
    request("text.txt").then(
        function(text){
            console.log("Contenuto del file: " + text);
        },
        function(error){
            console.log("Errore nel caricamento del file: " + error);
        }
    );
});