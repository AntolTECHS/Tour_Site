let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', function () {
var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
});


document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper for home slider with autoplay
    var homeSwiper = new Swiper(".home-slider", {
        loop: true,
        autoplay: {
            delay: 3000, // Slide change delay (3 seconds)
            disableOnInteraction: false // Keep autoplay active after interactions
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Initialize Swiper for reviews slider with autoplay
    var reviewsSwiper = new Swiper(".reviews-slider", {
        loop: true,
        spaceBetween: 20,
        autoHeight: true,
        grabCursor: true,
        autoplay: {
            delay: 3000, // Slide change delay (3 seconds)
            disableOnInteraction: false
        },
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
});
   document.addEventListener("DOMContentLoaded", () => {
    let loadMoreBtn = document.querySelector('.packages .load-more .btn');
    let currentItem = 3;

    if (loadMoreBtn) {
        loadMoreBtn.onclick = () => {
            let boxes = [...document.querySelectorAll('.packages .box-container .box')];
            for (let i = currentItem; i < currentItem + 3 && i < boxes.length; i++) {
                boxes[i].style.display = 'inline-block';
            }
            currentItem += 3;
            if (currentItem >= boxes.length) {
                loadMoreBtn.style.display = 'none';
            }
        };
    } else {
        console.error("❌ .packages .load-more .btn not found");
    }

    // booking form logic (you already had this here)
    const form = document.getElementById("bookingForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log("Form Data Submitted:", data);
            alert("✅ Booking submitted successfully!");
            form.reset();
        });
    }
});
