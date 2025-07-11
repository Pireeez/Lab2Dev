
function aparecerPesquisa(){
    let nav = document.querySelector(".container-nav");
    let nav2 = document.querySelector(".container-nav-2");
    nav.style.display = "none";
    nav2.style.display = "flex";
}

function sumirPesquisa(){
    let nav = document.querySelector(".nav-box");
    let nav3 = document.querySelector(".container-nav");
    let nav2 = document.querySelector(".container-nav-2");
    nav.style.display = "flex";
    nav2.style.display = "none";
    nav3.style.display = "block"
}
