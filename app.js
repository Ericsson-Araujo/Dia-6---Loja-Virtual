// Inicializador
window.addEventListener("load", function(){   
    
    var azulNozes = this.document.getElementById("azulNozes");
    var blueI = this.document.getElementById("blue-i");
    var intenseBlue = this.document.getElementById("intense-blue");
    var ampliada = this.document.getElementById("ampliada");
    
    azulNozes.addEventListener("click", function() {
        ampliada.src = "img/Azul-nozes-Galeria.jpg";
    });

    blueI.addEventListener("click", function() {
        ampliada.src = "img/blue-i-quadro.jpg";
    });

    intenseBlue.addEventListener("click", function() {
        ampliada.src = "img/Intense-Blue-I.jpg";
    });

});      

