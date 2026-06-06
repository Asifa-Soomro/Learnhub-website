// =========================
// AOS Animation
// =========================

AOS.init({
duration:1000,
once:true
});

// =========================
// Mobile Menu
// =========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

// =========================
// Counter Animation
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText = Math.ceil(current + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

// =========================
// FAQ Accordion
// =========================

const questions =
document.querySelectorAll(".faq-question");

questions.forEach(question => {

question.addEventListener("click", () => {

const answer =
question.nextElementSibling;

if(answer.style.display === "block"){

answer.style.display = "none";

}else{

document.querySelectorAll(".faq-answer")
.forEach(item=>{
item.style.display="none";
});

answer.style.display = "block";

}

});

});

// =========================
// Dark Light Mode
// =========================

const themeBtn =
document.querySelector(".theme-btn");

let darkMode = false;

themeBtn.addEventListener("click",()=>{

darkMode = !darkMode;

if(darkMode){

document.body.classList.add("dark-mode");

themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}else{

document.body.classList.remove("dark-mode");

themeBtn.innerHTML =
'<i class="fa-solid fa-moon"></i>';

}

});

// =========================
// Sticky Header Shadow
// =========================

window.addEventListener("scroll",()=>{

const header =
document.querySelector(".header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.1)";

}else{

header.style.boxShadow =
"0 2px 20px rgba(0,0,0,.05)";

}

});

// =========================
// Auto Testimonial Slider
// =========================

const slider =
document.querySelector(".testimonial-slider");

let scrollAmount = 0;

function autoSlide(){

if(slider){

scrollAmount += 1;

slider.scrollLeft = scrollAmount;

if(scrollAmount >= slider.scrollWidth / 2){

scrollAmount = 0;

}

}

}

setInterval(autoSlide,30);

// =========================
// Scroll To Top Button
// =========================

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display = "flex";

}else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const courseGrid =
document.querySelector(".course-grid");

let courseScroll = 0;

function moveCourses(){

courseScroll += 1;

courseGrid.scrollLeft =
courseScroll;

if(
courseScroll >=
courseGrid.scrollWidth / 2
){

courseScroll = 0;

}

}

setInterval(moveCourses,25);