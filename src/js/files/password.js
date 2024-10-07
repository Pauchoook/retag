export default function password() {
  const passwordButtons = document.querySelectorAll(".password-btn");
  if (passwordButtons.length) {
    passwordButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const parent = btn.closest(".form-item");
        const input = parent.querySelector(".input");

        if (input.type === "password") {
          input.type = "text";
          btn.classList.add("active");
        } else {
          input.type = "password";
          btn.classList.remove("active");
        }
      })
    }); 
  }
}