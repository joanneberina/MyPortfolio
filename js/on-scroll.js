window.onscroll = function() {
  scrollFunction()
}

window.addEventListener("resize", scrollFunction())

function scrollFunction() {
 if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  document.querySelector("nav").setAttribute("class", "shrink")
 } else {
  document.querySelector("nav").removeAttribute("class", "shrink")
 }
}

// if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//   document.getElementById("avatar-img").style.height = "40px"
//   document.querySelector("nav").style.backgroundColor = "rgba(240, 243, 248, 0.90)"
//   document.querySelectorAll("#nav-ul > li > a").forEach((node) => (node.style.color = "#767A85"))
//   if (window.innerWidth > 900) {
//     document.getElementById("avatar").style.marginTop = "1.5rem"
//     document.getElementById("avatar").style.marginBottom = "0"

//     document.getElementById("nav-ul").style.margin = "0 auto"
//     document.getElementById("nav-ul").style.marginRight = "6rem"
//   } else if (window.innerWidth > 600) {
//     document.getElementById("avatar").style.margin = "1rem 5rem 0"
//     document.getElementById("nav-ul").style.margin = "0 3rem"
//   } else {
//     document.getElementById("avatar").style.margin = "1rem 1.5rem 0"
//     document.getElementById("nav-ul").style.margin = "0 auto"
//   }
// } else {
//   document.querySelector("nav").style.backgroundColor = "rgba(253, 253, 253, 0)"
//   document.querySelectorAll("#nav-ul > li > a").forEach((node) => (node.style.color = "#767A85"))
//   if (window.innerWidth > 600) {
//     document.querySelector("#avatar").style.margin = "1.5rem 5rem"
//     document.querySelector("#avatar-img").style.height = "100px"
//     document.getElementById("nav-ul").style.marginRight = "3rem"
//   } else {
//     document.querySelector("#avatar").style.margin = "1.5rem"
//     document.querySelector("#avatar-img").style.height = "75px"
//     document.getElementById("nav-ul").style.margin = "1.5rem auto"
//   }
//   if (window.innerWidth > 900) {
//     document.getElementById("nav-ul").style.marginRight = "6rem"
//   }
// }