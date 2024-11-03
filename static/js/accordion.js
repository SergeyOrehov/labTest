// accordion
const faqItems = document.querySelectorAll(".faq__item");
faqItems.forEach((e) => {
    e.addEventListener("click", (el) => {
        const answer = el.target.closest(".faq__item").querySelector(".faq__answer");
        e.classList.toggle("active");
        e.querySelector('svg').classList.toggle("active");

        if (e.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    });
});

