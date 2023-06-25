function loaderFunction(){const preLoader= document.getElementById("loader-body");preLoader.style.display="none"}
const moonIcon=document.getElementById("moon");const sunIcon=document.getElementById("sun");const darkmodeContainer=document.getElementById("dark-mode-container");darkmodeContainer.addEventListener('click',()=>{document.body.classList.toggle("dark-mode")
if(document.body.classList.contains("dark-mode")){moonIcon.style.display="none";sunIcon.style.display="block"}else{moonIcon.style.display="block";sunIcon.style.display="none"}})

