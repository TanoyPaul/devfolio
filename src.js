(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

let menuDiv = document.querySelector('.menu-div');
let openMenu = document.querySelector('.open-menu');
let closeMenu = document.querySelector('.close-menu');

function videoAnimation(){

    gsap.set(
        ".about-self", {
            scale: 10
        }
    )

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'top 0%',
            end: 'bottom 0%',
            scrub: 2,
            pin: true,
        }
    })

    tl
    .to(
        '.video-div',{
            '--clip':"0%",
            ease: Power3,
            duration: 2
        }, 'a'
    )
    tl.to(
        '.about-self', {
            scale: 1,
            ease: Power3,
            duration: 2
        }, 'a'
    )
}

function navAnimation(){
    gsap.from(
        'nav', {
            opacity: 0,
            duration: 1.2,
            delay: 1
        }
    )
}
function menuAnimation (){
    openMenu.addEventListener(
        'click', function(){
            gsap.to(
                menuDiv, {
                    top: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    opacity: 1
                }
            ),
            openMenu.style.opacity = 0
        }
    )
    
    closeMenu.addEventListener(
        'click', function(){
            gsap.to(
                menuDiv, {
                    top: -1200,
                    duration: 2.8,
                    ease: 'power3.out'
                }
            ),
            openMenu.style.opacity = 1
        }
    )
}
function scrollDownAnimation(){
    gsap.from(
        '.scroll-down', {
          opacity: 0,
          scale: 0,
          delay:1,
          duration: 0.8
        }
      )
    
    gsap.to(
        '.scroll-down', {
            y: 20,
            repeat: -1,
            delay: 1.2,
            duration: 1,
            yoyo: true
        }
    )
}
function skillsAnimation(){
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.skills',
            start: 'top bottom',
        }
    })
    
    tl.from(
        '.skills-heading h1', {
            y: 20,
            opacity: 0,
            stagger: 0.4,
            duration: 1.2,
            ease: 'power3.out'
        }
    )
    
    tl.from(
        ".imgs .eachImg", {
            y: 80,
            opacity: 0,
            stagger: 0.12,
            duration: 1.2,
            ease: 'power3.out'        
        }, 'skillsAnim'
    )

    tl.from(
        '.skills-desc-section .desc', {
            y: 80,
            opacity: 0,
            ease: Power4,
            duration: 1.2,
            stagger: 0.4,
            scrollTrigger: {
                trigger: '.skills-desc-section',
                start: 'top 90%',
            }
        }, 'skillsAnim'
    )
}

function projectsAnimation(){
    document.querySelectorAll('.projects-cards a').forEach(
        function(el){
            el.addEventListener(
                'mousemove', function(dets){
                    gsap.to(
                        this.querySelector('.circle'),{
                            opacity: 0.5,
                            ease: Power4,
                            x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                            duration: 0.8
                        }
                    )
                }
            )
            el.addEventListener(
                'mouseleave', function(dets){
                    gsap.to(
                        this.querySelector('.circle'),{
                            opacity: 0,
                            ease: Power4,
                            duration: 0.8
                        }
                    )
                }
            )
        }
    )
}

videoAnimation()
navAnimation()
menuAnimation()
scrollDownAnimation()
skillsAnimation()
projectsAnimation()

