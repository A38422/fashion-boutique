let navbar = document.querySelector(".navbar");

document.querySelector("#menu-bar").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  navbar.classList.remove("active");
};

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }

  // if (prevScrollpos > currentScrollPos && window.scrollY > 0) {
  //   document.querySelector("header").classList.add("active");
  // } else {
  //   document.querySelector("header").classList.remove("active");
  // }
  // prevScrollpos = currentScrollPos;
};

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.querySelector("body").classList.add("active");
  } else {
    document.querySelector("body").classList.remove("active");
  }
};

document.querySelectorAll(".small-image-1").forEach((images) => {
  images.onclick = () => {
    document.querySelector(".big-image-1").src = images.getAttribute("src");
  };
});

document.querySelectorAll(".small-image-2").forEach((images) => {
  images.onclick = () => {
    document.querySelector(".big-image-2").src = images.getAttribute("src");
  };
});

document.querySelectorAll(".small-image-3").forEach((images) => {
  images.onclick = () => {
    document.querySelector(".big-image-3").src = images.getAttribute("src");
  };
});

let countDate = new Date("march 10, 2023 00:00:00").getTime();

function countDown() {
  let now = new Date().getTime();
  gap = countDate - now;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let d = Math.floor(gap / days);
  let h = Math.floor((gap % days) / hours);
  let m = Math.floor((gap % hours) / minutes);
  let s = Math.floor((gap % minutes) / seconds);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
}

setInterval(function () {
  countDown();
}, 1000);

var swiper = new Swiper(".product-slider", {
  slidesPerView: 3,
  loop: false,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 3,
  loop: false,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

// function truncateText(element, maxLength) {
//   var elemt = element,
//       truncated = elemt.innerText;

//   if (truncated.length > maxLength) {
//       truncated = truncated.substr(0, maxLength) + '...';
//   }
//   return truncated;
// }

// let txtReviews = document.getElementsByClassName('content-review');

// for (let i = 0; i < txtReviews.length; i++) {
//   txtReviews[i].innerHTML = truncateText(txtReviews[i], 100);
// }