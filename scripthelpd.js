document.getElementById("helpButton").onclick = function() {
    document.getElementById("helpModal").style.display = "block";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("helpModal")) {
        document.getElementById("helpModal").style.display = "none";
    }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    document.getElementById("helpModal").style.display = "none"; 
}
