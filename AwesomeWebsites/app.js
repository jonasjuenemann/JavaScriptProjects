//gsap als animation tool
if (!sessionStorage.getItem('animation')) {
    //timelime
    const tl = gsap.timeline({defaults: {ease: "power1.out"}});

    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 }); /*stagger -> sorgt dafuer das die Schriftzuege leicht versetzt zum vorschein kommen*/
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
    /*position -> damit dies gleichzeitig mit der vorherigen timeline zum Vorschein kommt*/

    sessionStorage.setItem('animation', "1");
} else {
    document.querySelector(".intro").style.display = "none";
}
