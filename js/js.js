
let navicon = document.getElementById("icon");
navicon.addEventListener("mouseover",function(){
    let navlist = document.getElementById("navlist");
    navlist.style.display="block";
})

navicon.addEventListener("click",function(){
    let navlist = document.getElementById("navlist");
    navlist.style.display="none";
})