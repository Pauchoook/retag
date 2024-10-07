import { handleClose } from "./burger.js";

export default function anchor() {
  document.querySelectorAll(".anchor").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      if (document.querySelector("#burger").classList.contains("open")) {
        handleClose();
      }

      let href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      if (scrollTarget) {
        const offsetPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}