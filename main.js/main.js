window.addEventListener('scroll', function(){
    let animation = this.document.getElementById('animation');
    let positionObj1 = animation.getBoundingClientRect().top;
    console.log(positionObj1);
})