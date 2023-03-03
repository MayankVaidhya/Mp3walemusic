// Navgation Start responsive

const menu_icon = document.querySelector('.menu_icon');
const close_menu = document.querySelector('.close_menu');
const nav_list = document.querySelector('.nav_list');

menu_icon.onclick = () => {
    nav_list.style.transform = "translateY(0)";
}

close_menu.onclick = () => {
    nav_list.style.transform = "translateY(-110%)";
}


// Read More button

let paratext = document.getElementsByClassName('para');
let Btn = document.getElementsByClassName('myBtn')[3];

Btn.addEventListener('click', function(){
  alert('jsdfj');
})

