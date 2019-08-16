var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var choicez = Array;
var i, len;
for (i=1, len = 9; i<len; i++) {
    if (document.getElementById("item" + i).innerHTML != null) {
        choicez.push(document.getElementById("item" + i).innerHTML)
    }
    else {
        continue;
    }
}
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    document.getElementById("item1").innerHTML = ""
    document.getElementById("item2").innerHTML = ""
    document.getElementById("item3").innerHTML = ""
    document.getElementById("item4").innerHTML = ""
    document.getElementById("item5").innerHTML = ""
    document.getElementById("item6").innerHTML = ""
    document.getElementById("item7").innerHTML = ""
    document.getElementById("item8").innerHTML = ""
    document.getElementById("item9").innerHTML = ""
    document.getElementById("dataBreach").innerHTML = choices[index]
}