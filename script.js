let toggle = document.getElementById("toggle");
let close_btn = document.querySelector(".close-btn");
let menu_item = document.querySelector(".menu-item");

toggle.addEventListener("click",()=>{
 menu_item.classList.toggle("top");
 close_btn.style.display ="block";
});

close_btn.addEventListener("click",()=>{
    menu_item.classList.toggle("top");
    close_btn.style.display ="none";
});