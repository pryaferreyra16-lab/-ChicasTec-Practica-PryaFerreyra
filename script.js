document.querySelectorAll(".interest-tag").forEach((tag) => {
  tag.addEventListener("click", () => {
    const isSelected = tag.getAttribute("aria-pressed") === "true";
    tag.setAttribute("aria-pressed", String(!isSelected));
  });
});