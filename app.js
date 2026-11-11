const filters = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".activity-item");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filters.forEach((filter) => {
      const isActive = filter === button;
      filter.classList.toggle("active", isActive);
      filter.setAttribute("aria-pressed", String(isActive));
    });

    items.forEach((item) => {
      item.hidden = selected !== "all" && item.dataset.kind !== selected;
    });
  });
});

const themeButton = document.querySelector("#themeButton");
themeButton?.addEventListener("click", () => {
  const enabled = document.body.classList.toggle("high-glow");
  themeButton.setAttribute("aria-pressed", String(enabled));
  themeButton.setAttribute(
    "aria-label",
    enabled ? "Turn glow intensity down" : "Turn glow intensity up"
  );
});
