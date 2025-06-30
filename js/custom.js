const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
     document.body.classList.toggle("dark")
})

// Toggle dropdown on button click
document.addEventListener("DOMContentLoaded", function () {
     const dropdowns = document.querySelectorAll(".dropdown");

     dropdowns.forEach(function (dropdown) {
          const button = dropdown.querySelector("button");
          const menu = dropdown.querySelector(".dropdown-menu");

          button.addEventListener("click", function (e) {
               e.stopPropagation();

               // Close other dropdowns before toggling this
               dropdowns.forEach(d => {
                    const m = d.querySelector(".dropdown-menu");
                    if (d !== dropdown) m.classList.remove("show");
               });

               menu.classList.toggle("show");
          });
     });

     document.addEventListener("click", function (e) {
          dropdowns.forEach(function (dropdown) {
               const menu = dropdown.querySelector(".dropdown-menu");
               if (!dropdown.contains(e.target)) {
                    menu.classList.remove("show");
               }
          });
     });
});