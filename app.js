let upBtn = document.getElementById("upbtn");

window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
  }
};


upBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
})