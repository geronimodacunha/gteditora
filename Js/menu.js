var menu = document.getElementById("menu")
var topo = document.getElementById("topo")

menu.addEventListener('click', function(){
    if(topo.style.display == "block"){
        topo.style.display = "none"
    }
    else{
        topo.style.display = "block"
    }
})


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const opacity = Math.min(1, scrollPosition / 300); // Adjust the division value for sensitivity
    topo.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
});