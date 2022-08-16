

const container = document.querySelector(".container")
const toggleYes = document.querySelector(".dark-options-yes")
const toggleNo = document.querySelector(".dark-options-no")
const navbar = document.querySelector(".navbar")


function toggleDarkModeClass(togglePos, toggleNeg){
    if(typeof togglePos === 'string' && typeof toggleNeg === 'string'){
        const toggleYes = document.querySelector("." + togglePos)
        const toggleNo = document.querySelector("." + toggleNeg)
        toggleYes.classList.add("toggle-hide")
        toggleNo.classList.remove('toggle-hide')

    }
    else{
        console.log("Invalid Classname")
        return 
    }
}


toggleYes.addEventListener('click', function(e){
    toggleDarkModeClass('dark-options-yes', 'dark-options-no')
    container.classList.add('container-dark')
    // navbar.classList.add('container-dark')
})


toggleNo.addEventListener('click', function(e){
    toggleDarkModeClass('dark-options-no', 'dark-options-yes')
    container.classList.remove('container-dark')
    // navbar.classList.remove('container-dark')
})

