document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundColor = "#e3f2fd"; 
});

document.getElementById("admiro").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#ffeb3b"; 
});

document.getElementById("admiro").addEventListener("mouseleave", function() {
    this.style.backgroundColor = "white"; 
});

document.getElementById("meta").addEventListener("click", function() {
    alert("¡Haz tus sueños realidad!"); 
});

document.getElementById("musica").addEventListener("dblclick", function() {
    alert("¡Toda la gloria y la honra sea para Dios");
});

document.getElementById("vivir").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        alert("Has presionado Enter en esta sección.");
    }
});

document.getElementById("animal-img").addEventListener("dblclick", function() {
    this.src = "https://via.placeholder.com/150/0000FF/FFFFFF?text=Nuevo+Animal";
});