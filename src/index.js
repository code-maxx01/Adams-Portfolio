const menuBtn = document.getElementById("mobile-open-button")
const cancelBtn = document.getElementById("cancel-btn")
const nav = document.getElementById("navList")
const hideBtn = document.getElementById("hideBtn")
const hideBtns = document.getElementById("hideBtns")
const hideBtnss = document.getElementById("hideBtnss")
const hideBtnsss = document.getElementById("hideBtnsss")
menuBtn.addEventListener("click", () =>{
  nav.style.display = "block"
  cancelBtn.style.display = "flex"
  menuBtn.style.display = "none"

})
cancelBtn.addEventListener("click", () =>{
  nav.style.display = "none"
  cancelBtn.style.display = "none"
  menuBtn.style.display = "flex"
})
hideBtn.addEventListener("click", () =>{
  nav.style.display = "none"
  cancelBtn.style.display = "none"
  menuBtn.style.display = "flex"
})
hideBtns.addEventListener("click", () =>{
  nav.style.display = "none"
  cancelBtn.style.display = "none"
  menuBtn.style.display = "flex"
})
hideBtnss.addEventListener("click", () =>{
  nav.style.display = "none"
  cancelBtn.style.display = "none"
  menuBtn.style.display = "flex"
})
hideBtnsss.addEventListener("click", () =>{
  nav.style.display = "none"
  cancelBtn.style.display = "none"
  menuBtn.style.display = "flex"
})
