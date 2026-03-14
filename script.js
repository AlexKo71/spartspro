const menu = document.querySelector(".menu-btn");
const menuSpan = document.querySelector(".menu-span");
console.log(menu);

menu.addEventListener("click", () => {
  menuSpan.classList.toggle("hide");
});
