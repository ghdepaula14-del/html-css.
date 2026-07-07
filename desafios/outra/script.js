document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("mousemove", e => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = ((y / rect.height) - 0.5) * -12;
    const ry = ((x / rect.width) - 0.5) * 12;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rx}deg)
      rotateY(${ry}deg)
      scale(1.05)
    `;
  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  });

});