document.addEventListener("DOMContentLoaded", () => {
    const inp = document.querySelector("#check");
    const panel = document.querySelector(".panel");

    const tl = gsap.timeline({ paused: true });
    gsap.to(panel, {
        xPercent: 100,
        yPercent: 1.4,
        duration: .001
    })
    inp.addEventListener("change", () => {
        if (inp.checked) {
            tl.clear();
            tl.to(panel, {
                xPercent: 0,
                duration: 0.7,
                yPercent: 1.4,
                ease: "power2.out",
                onStart: () => {
                    panel.style.display = "flex";
                },
            });
        } else {
            tl.clear();
            tl.to(panel, {
                duration: 0.7,
                xPercent: 100,
                yPercent: 1.4,
                ease: "power2.out",
                onComplete: () => {
                    panel.style.display = "none";
                },
            });
        }
        tl.play();
    });
});

//заткмнение
// if (inp.checked) {
//     tl.clear();
//     tl.to(panel, {
//         opacity: 1,
//         duration: 0.8,
//         onStart: () => {
//             panel.style.display = "flex";
//         },
//     });
// } else {
//     tl.clear();
//     tl.to(panel, {
//         opacity: 0,
//         duration: 0.8,
//         onComplete: () => {
//             panel.style.display = "none";
//         },
//     });
// }
// tl.play();