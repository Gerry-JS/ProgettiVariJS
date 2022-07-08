function CambiaColore() {
    let VettColori = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ,"A", "B", "C", "D", "E", "F"];

    let x = "";

    for (i=0; i<6; i++) {
        let y = Math.floor(Math.random()*VettColori.length);

        x += VettColori[y];
    }
    document.getElementById("Hexcode").innerHTML = x;
    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + x;
}