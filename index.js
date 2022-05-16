function mouseover(x) {
    x.src = "https://media.giphy.com/media/lTjXSsPmX3Jdx4J7DU/giphy.gif";
    text = document.getElementById("intro-t");
    text.innerHTML = "Boo!";
}
function mouseoff(x) {
    x.src = "https://i.pinimg.com/originals/25/06/55/250655c19fe77aa21a7a4d3ae828297c.jpg";
    text = document.getElementById("intro-t");
    text.innerHTML = "Welcome to my personal webpage.<br>Explore my favorite music, games, and projects, and get to know me a little better.";
}
function blurimg(x) {
    let images = document.querySelectorAll("img");
    images[x].style.filter = "blur(0)";
}
function blurring(x) {
    let images = document.querySelectorAll("img");
    images[x].style.filter = "blur(1px)";
    setTimeout(150);
    images[x].style.filter = "blur(2px)";
    setTimeout(150);
    images[x].style.filter = "blur(4px)";
}
function initblur() {
    for (i = 0; i < 10; i++)
    {
        blurring(i);
    }
}

