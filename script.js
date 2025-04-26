const toggleMenu = () => {
  document.getElementById("items").classList.toggle("active");
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    autoplay: {
        delay: 3000
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

document.addEventListener("DOMContentLoaded", (event) => {

  gsap.registerPlugin(ScrollTrigger);

  const lpTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".landingPage .leftSide",
      start: "top 80%",
      toggleActions: "play none restart none"
    }
  })

  lpTimeline
  .from(".landingPage .leftSide", {
      opacity: 0,
      y: -10,
      duration: 1
  })
  .from(".landingPage .rightSide", {
      opacity: 0,
      duration: 2
  }, "-=1");

  
  const aboutTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".aboutUs .heading",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  aboutTimeline
    .from(".aboutUs .heading", {
      opacity: 0,
      y: 70,
      duration: 1.2
    })
    .from(".aboutUs .leftSide #img1", {
      opacity: 0,
      y: 100,
      duration: 1
    })
    .from(".aboutUs .leftSide #img2", {
      opacity: 0,
      y: 100,
      duration: 1
    })
    .from(".aboutUs .leftSide #img3", {
      opacity: 0,
      y: 100,
      duration: 1
    })
    .from(".aboutUs .rightSide", {
      opacity: 0,
      x: 100,
      duration: 1.5
    }, "-=2");
    
    gsap.from(".services .heading", {
      scrollTrigger: {
        trigger: ".services .heading",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      },
      y: 100,
      opacity: 0,
      duration: 1.2
    });
    
    gsap.utils.toArray(".item").forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1.2
      });
    });
    
    const plansTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".plans .heading",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }
    });
    
    plansTimeline
      .from(".plans .heading", {
        opacity: 0,
        y: 100,
        duration: 1.2
      })
      .from(".plans .card1", {
        opacity: 0,
        x: -100,
        duration: 0.7
      })
      .from(".plans .card2", {
        opacity: 0,
        x: -50,
        duration: 0.7
      })
      .from(".plans .card3", {
        opacity: 0,
        x: -50,
        duration: 0.7
      });

    gsap.from(".testimonials .heading", {
      scrollTrigger: {
        trigger: ".testimonials .heading",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      },
      opacity: 0,
      y: 50,
      duration: 1.2
    });
    
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contactUs .heading",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }
    });
    
    contactTimeline
      .from(".contactUs .heading", {
        opacity: 0,
        y: 50,
        duration: 1.2
      })
      .from(".contactUs #contact-form", {
        opacity: 0,
        duration: 1,
        ease: "power2.in"
      })
      .from(".contactUs .right", {
        opacity: 0,
        x: 50,
        duration: 1.5
      }, "-=0.5");

});

