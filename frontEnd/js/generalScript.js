const navBar = document.getElementById('nav');

document.addEventListener('scroll',(sc)=>{
    if(window.scrollY >= 150){
        navBar.style.background = "var(--darkBackgroundHalfTransparent)";
    }
    else{
        navBar.style.background = "none";
    }
})