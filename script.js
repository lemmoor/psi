let btns = document.querySelectorAll(".accordion-question")
let prev = null;
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if(prev && prev != btn){
            prev.classList.remove("active");
            prev.nextElementSibling.style.maxHeight = null
        }
        btn.classList.toggle("active")
        changeHeight(btn.nextElementSibling)
        prev = btn;
    })
})

function changeHeight (element){
    if (element.style.maxHeight) {
        element.style.maxHeight = null;
      } else {
        element.style.maxHeight = element.scrollHeight + "px";
      }
}