// js/script.js

const fadeElements =
document.querySelectorAll(".fade-in");

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.2
});

fadeElements.forEach(element=>{
    observer.observe(element);
});

// Navbar shadow on scroll
window.addEventListener("scroll", ()=>{

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow =
        "0 4px 25px rgba(0,0,0,0.3)";
    }else{
        navbar.style.boxShadow =
        "none";
    }

});
