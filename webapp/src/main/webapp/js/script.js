'use strict';

// Start Landing text animation

var landH1 = "Hello, I'm Osamah";
var landSpan = "Web Developer";
var landP = "I build dynamic and modern websites";

var showText = function (target, message, index, interval, delay) {

    if (delay > 0) {
        setTimeout(function () { showText(target, message, index, interval, 0); }, delay);
        return;
    }

    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval, 0); }, interval);
    }
};

$(function () {
    showText("#land_h1", landH1, 0, 70);
    showText("#land_span", landSpan, 0, 80, 1500);
    showText("#land_p", landP, 0, 50, 2800);
});


// End Landing text animation

// Start Landing icons appearance

const socialIcons = document.querySelector(".social-icons");

function hideLinks() {
    socialIcons.style.display = "none";
}

function showLinks() {
    socialIcons.style.display = "block";
}

hideLinks();
setTimeout(showLinks, 4900);

// End Landing icons appearance

// Start scroll animation
const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px 0px -40% 0px',
});

hiddenElements.forEach((el) => observer.observe(el));

// End Scroll animation

// Start open image

const images = document.querySelectorAll('.gallery .box .image img');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalImage = document.querySelector('#modal-image');
const close = document.querySelector('.close-modal');

const openModal = function () {
    $(modal).css("display", "block");
    $(overlay).css("display", "block");
    $(modal).css("opacity", "1");
    $("body").css("overflow", "hidden");
};

const closeModal = function () {
    $(overlay).css("display", "none");
    setTimeout(() => {
        $(modal).css("display", "none");
    }, 500);
    $(modal).css("opacity", "0");
    $("body").css("overflow", "");
};

images.forEach((image) => {
    image.addEventListener('click', () => {
        openModal();
        modalImage.src = image.src;
    });
});

close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// End open image

// Start model

const featuresBtn = document.querySelectorAll('.features .container .box button');
const pricingBtn = document.querySelectorAll('.pricing .container .box button');
const modal_2 = document.querySelector('.modal_2');

const openModal_2 = function () {
    modal_2.style.display = 'block';
    overlay.style.display = 'block';
    modal_2.style.opacity = '1';
};

const closeModal_2 = function () {
    overlay.style.display = 'none';
    setTimeout(() => {
        modal_2.style.display = 'none';
    }, 500);
    modal_2.style.opacity = '0';
};

featuresBtn.forEach((Button) => {
    Button.addEventListener('click', () => {
        openModal_2();
    });
});

pricingBtn.forEach((Button) => {
    Button.addEventListener('click', () => {
        openModal_2();
    });
});

close.addEventListener('click', closeModal_2);
overlay.addEventListener('click', closeModal_2);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal_2();
    }
});
// End Features

// Start count down

$(document).ready(function () {
    const countDownDate = new Date("April 21, 2023 00:00:00").getTime();

    let x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(".Days").text(days);
        $(".Hours").text(hours);
        $(".Minutes").text(minutes);
        $(".Seconds").text(seconds);

    }, 1000);
});

// End count down

// Start count up

const options = {
    rootMargin: '0px',
    threshold: 0.3
};

const observer2 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const targetValue = parseInt(target.dataset.target);
            const countUp = function () {
                let count = 0;
                const increment = Math.ceil(targetValue / 50);
                const updateCount = function () {
                    if (count < targetValue) {
                        count += increment;
                        target.textContent = count;
                        setTimeout(updateCount, 100);
                    } else {
                        target.textContent = targetValue;
                    }
                };
                updateCount();
            };
            countUp();
            observer.unobserve(target);
        }
    });
}, options);

document.querySelectorAll('.number').forEach((element) => {
    observer2.observe(element);
});

// End count up

// Start video

$('.video_01').on({
    'click': function () {
        $('.vid_img').attr('src', 'imgs//video-preview.jpg');
    }
});

$('.video_02').on({
    'click': function () {
        $('.vid_img').attr('src', 'imgs//video-2.png');
    }
});
$('.video_03').on({
    'click': function () {
        $('.vid_img').attr('src', 'imgs//video-3.png');
    }
});
$('.video_04').on({
    'click': function () {
        $('.vid_img').attr('src', 'imgs//video-4.jpeg');
    }
});
$('.video_05').on({
    'click': function () {
        $('.vid_img').attr('src', 'imgs//video-5.png');
    }
});
$('.video_06').on({
    'click': function () {
        $('.vid_img').attr('src', 'imgs//video-6.png');
    }
});
$('.video_07').on({
    'click': function () {
        $('.vid_img').attr('src', 'imgs//video-7.jpg');
    }
});

// End video

