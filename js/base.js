window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var banner = this.document.querySelector("banner");
    header.classList.toggle("abajo", window.scrollY>"banner"|| this.window.scrollY>100);
})