
const tabs = document.querySelector(".tabs")
const buttons = document.querySelectorAll(".button")
const tabsContent = document.querySelectorAll(".t-content")

tabs.addEventListener("click", function(e){
   const id = e.target.dataset.id
   if(id){
    buttons.forEach(function(btn){
        btn.classList.remove("ghost")
        e.target.classList.add("ghost")
    })

    tabsContent.forEach(function(ttab){
        ttab.classList.remove("ghost")
    })

    const content = document.getElementById(id)
    content.classList.add("ghost")
   }
})