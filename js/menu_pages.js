
var btnMenu = document.getElementById('btn_menu');
var nav = document.getElementById('prin_menu');
var container = document.getElementById('bannerblock');
var arrow = document.getElementById('arrow');
var body = document.getElementById('body');
var btn_menu = document.getElementById('btn_menu');
var info = document.getElementById('info_pages');
var main = document.getElementById('container_pages');
var footer = document.getElementById('footer');
var containerIni = document.getElementById('container');

btnMenu.addEventListener('click', function(){
       
        
    containerIni.classList.toggle('desplazar');

 

    container.classList.toggle('desplazar');
     main.classList.toggle('desplazar');
    arrow.classList.toggle('delete_arrow');
    
    nav.classList.toggle('mostrar');
    
    body.classList.toggle('delete_scroll');
    
    btn_menu.classList.toggle('desplazar_btn');
    info.classList.toggle('desplazar_info');
    

   
    footer.classList.toggle('desplazar');
    
   
})



