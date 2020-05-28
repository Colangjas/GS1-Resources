$(function () {
    const tl = gsap.timeline({ defaults: { duration: .5 } });
    let triggered = true;

    $(window).scroll(function () {
        if ($(document).scrollTop() > 400 && !triggered) {
            triggered = true;
            return tl.to(".level", { duration: .25, y: 10, ease: 'power1.out' })
                .to(".level", { duration: .5, rotationY: 360, y: -20, ease: 'power2.in' })
                .to(".column-2", { duration: .25, paddingTop: "4.2em" }, .65)
                .to(".column-3", { duration: .25, paddingTop: "8.4em" }, .65)
                .to(".column-4", { duration: .25, paddingTop: "12.5em" }, .65)
                .to(".column-5", { duration: .25, paddingTop: "16.4em" }, .65)
                .to(".level-chart", { duration: .25, paddingTop: "16px" }, .65)
                .to(".text", { duration: .5, opacity: '1', height: 'auto', })
                .to(".level", { duration: .25, y: 0, ease: 'power2.inOut' }, 1.15);
        }
    });
    if ($(document).scrollTop() < 400 && triggered) {
        triggered = false;
        return gsap.to(".level", { duration: 0, y: 0, rotationY: 0 }),
            gsap.to(".text", { duration: 0, opacity: '0', height: '0', });
    }
});