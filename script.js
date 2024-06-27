let resumes = document.querySelectorAll(".resume")
let resumes_container = document.querySelector(".resumes_container")
let about_section=document.getElementsByClassName("about_section")
resumes.forEach(resume =>{
    resume.addEventListener("click",() => {
        about_section[0].classList.toggle("tomargin")
        resume.classList.toggle("active")
        resumes_container.classList.toggle("active")
        
    })
})
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
 
    window.addEventListener('scroll', () => {
      if (window.scrollY > 700) {
        navbar.classList.add('shadow');
      } else {
        navbar.classList.remove('shadow');
      }
    });
  });
