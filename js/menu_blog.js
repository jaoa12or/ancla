var btnMenu = document.getElementById('btn_menu');
var main = document.getElementById('container_pages');
var footer = document.getElementById('footer');
var nav = document.getElementById('prin_menu');
var btn_menu = document.getElementById('btn_menu');
var info= document.getElementById('info_pages');
var body = document.getElementById('body');
btnMenu.addEventListener('click', function(){
       
        
    nav.classList.toggle('mostrar');
     main.classList.toggle('desplazar');

    info.classList.toggle('desplazar_info');
   
    footer.classList.toggle('desplazar');
     btn_menu.classList.toggle('desplazar_btn');
       body.classList.toggle('delete_scroll');
 
   
})

