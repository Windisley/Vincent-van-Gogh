document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded")

  const buttomMenu = document.querySelector(".box-button-menu")
  const headerMobile = document.querySelector(".header-mobile")
  buttomMenu.addEventListener("click", ()=>{
    headerMobile.classList.toggle("header-mobile-responsive")
  })

})
