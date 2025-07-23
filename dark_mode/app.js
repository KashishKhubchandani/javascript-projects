var icon = document.getElementById('icon');

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
     if (document.body.classList.contains("dark-theme")) {
        icon.setAttribute("src", "images/sun.png");
    } else {
        icon.setAttribute("src", "images/moon.png");
    }
}