function color() {
    var array = Array.from(document.getElementsByTagName('div'));
    array.forEach(element => {
        element.style.backgroundColor = "blue";
    });
}

function change() {
    document.getElementById('1').style.backgroundColor = "green";
    document.getElementById('2').style.backgroundColor = "blue";
    document.getElementById('3').style.backgroundColor = "red";
}