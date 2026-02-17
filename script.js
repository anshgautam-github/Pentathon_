const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  const answer = item.querySelector(".faq-answer");

  item.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    items.forEach(i => closeItem(i));

    if (!isOpen) openItem(item);
  });
});

function openItem(item) {
  const answer = item.querySelector(".faq-answer");
  item.classList.add("active");

  gsap.to(answer, {
    height: "auto",
    duration: 0.6,
    ease: "power3.out"
  });
}

function closeItem(item) {
  const answer = item.querySelector(".faq-answer");
  item.classList.remove("active");

  gsap.to(answer, {
    height: 0,
    duration: 0.4,
    ease: "power3.in"
  });
}
