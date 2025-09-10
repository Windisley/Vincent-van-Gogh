document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded")

  const buttomMenu = document.querySelector(".box-button-menu")

  const buttomCenter = document.querySelector(".button-center")
  const buttomLeft = document.querySelector(".button-left")
  const buttomRight = document.querySelector(".button-right")

  
  const headerMobile = document.querySelector(".header-mobile")
  buttomMenu.addEventListener("click", ()=>{
    headerMobile.classList.toggle("header-mobile-responsive")
    buttomCenter.classList.toggle("button-center-on")
    buttomLeft.classList.toggle("button-left-on")
    buttomRight.classList.toggle("button-right-on")

  })

})
