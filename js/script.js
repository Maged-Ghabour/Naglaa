
///////////////////////////////////////////////////////////
// Set current year
// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     // Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // Close mobile naviagtion
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
/*
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
*/




var swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  spaceBetween: 5,
  sliderPerGroup: 5,
  loop: true,
  // centerSlide: "true",
  // grabCursor: "true",
  // autoplay: {
  //   delay: 1500,
  //   disableOnInteraction: false,
  // },


  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 3,
    },
    520: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
    1300: {
      slidesPerView: 6,
    },
  },
});

/* Filter  */

// let switcherLis = document.querySelectorAll(".switcher .swiper-slide");
// let imgs = Array.from(document.images);

// switcherLis.forEach((swiperSlide) => {
//   swiperSlide.addEventListener("click", removeActive);
//   swiperSlide.addEventListener("click", manageImgs);
// });

// // Remove Active Class From All Lis And Add To Current
// function removeActive() {
//   switcherLis.forEach((swiperSlide) => {
//     swiperSlide.classList.remove("active");
//     this.classList.add("active");
//   });
// }

// // Manage Imgs
// function manageImgs() {
//   imgs.forEach((img) => {
//     img.style.display = "none";
//   });
//   document.querySelectorAll(this.dataset.cat).forEach((el) => {
//     el.style.display = "block";
//   });
// }


