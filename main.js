const navBtn = document.querySelector(".dropdown")
const links = document.querySelector(".nav-items")
let navHeight = links.getBoundingClientRect()
let headerContainer = document.querySelector(".header-container")
const checkbox = document.querySelector("input[name=checkbox]")
const projectsText = document.querySelector(".head")

navBtn.addEventListener("click", function(){
    let height = 103
    checkbox.addEventListener("change", function(){
        if(this.checked){
            headerContainer.style.paddingTop = "133px"
        }else{
            headerContainer.style.paddingTop = "30px"
        }
    })
    checkbox.addEventListener("change", function(){
        if(this.checked){
            projectsText.style.paddingTop = "133px"
        }else{
            projectsText.style.paddingTop = "30px"
        }
    })
})