$(function(){

    console.log('gsap code loaded');
    if (window.TweenLite && window.CSSPlugin) {
        //start your banner animation
        gsap.to(".box", { duration: 2, x: 300 });
        gsap.to(".green", { duration: 3, rotation: 360, scale: 0.5 });
        
        gsap.to(".level-1", { duration: 3, rotationX: 360 });
        gsap.from(".text-1", { duration: 3, y: -100, });
    }
    else {
        //perhaps start a setInterval to check for the assets to be loaded
        alert('gsap isn\'t loading');
    }
});