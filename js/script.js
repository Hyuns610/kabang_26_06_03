const depth1Lists = document.querySelectorAll(".depth1-list");
const depth2NavBg = document.querySelector(".depth2-nav-bg");

const activeMenuTexts = ["소개", "투자정보"];

depth1Lists.forEach((list) => {
  const linkText = list.querySelector(".depth1-link")?.textContent.trim();

  if (activeMenuTexts.includes(linkText)) {
    list.addEventListener("mouseenter", () => {
      depth2NavBg.classList.add("active");
    });

    list.addEventListener("mouseleave", () => {
      depth2NavBg.classList.remove("active");
    });
  }
});

const swiper = new Swiper(".section-2-content .swiper", {
  slidesPerView: "auto",
});

const section2 = document.querySelector(".section-2");
const swiperSlides = document.querySelectorAll(
  ".section-2-content .swiper-slide",
);

function checkSection2Scroll() {
  if (!section2) return;

  const rect = section2.getBoundingClientRect();
  const sectionHeight = rect.height;
  const viewportHeight = window.innerHeight;

  const scrolledIntoSection = viewportHeight - rect.top;
  const threshold = sectionHeight * 0.15;

  if (scrolledIntoSection >= threshold) {
    swiperSlides.forEach((slide) => {
      slide.classList.add("spread");
    });
  } else {
    swiperSlides.forEach((slide) => {
      slide.classList.remove("spread");
    });
  }
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      checkSection2Scroll();
      ticking = false;
    });
    ticking = true;
  }
});

checkSection2Scroll();
