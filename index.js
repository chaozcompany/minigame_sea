let anzahlGegossen = 0;

function giessen() {

    if (anzahlGegossen < 12) 
    {
        anzahlGegossen = anzahlGegossen + 1;

        document.getElementById("bereits-gegossen").innerHTML = anzahlGegossen;
    } else {
        alert("life is full of magic! 💖️");
    }

    if (anzahlGegossen === 3) 
    {
        document.getElementById("kartenbild").setAttribute("src","bilder/Pflanze2.png")
        document.getElementById("benoetigtes-giessen").innerHTML = 6;
    }

    if (anzahlGegossen === 6) 
    {
        document.getElementById("kartenbild").setAttribute("src","bilder/Pflanze3.png")
        document.getElementById("benoetigtes-giessen").innerHTML = 9;
    }
    
    if (anzahlGegossen === 9) 
    {
        document.getElementById("kartenbild").setAttribute("src","bilder/Pflanze4.png")
        document.getElementById("benoetigtes-giessen").innerHTML = 12;
    }

    if (anzahlGegossen === 12) {
        document.getElementById("kartenbild").setAttribute("src","bilder/Pflanze5.png")
        document.getElementById("benoetigtes-giessen").innerHTML = 12;
        
    }


}


function resetGame() {
    anzahlGegossen = 0;
    document.getElementById("bereits-gegossen").innerHTML = anzahlGegossen;
    document.getElementById("benoetigtes-giessen").innerHTML = 3;
    document.getElementById("kartenbild").setAttribute("src", "bilder/Pflanze1.png");
}