/* script para detectar los frames del scroll */
window.addEventListener('scroll', function(){
    let animation = this.document.getElementById('animation');
    let positionObj1 = animation.getBoundingClientRect().top;
    console.log(positionObj1);
})

/* Script de la animacion de carga indica cuando debe desaparecer */
window.onload = function(){
    var contenedor = document.getElementById('container-carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}