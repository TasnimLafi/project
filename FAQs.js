const faqs=document.querySelectorAll(".FAQs-card")
faqs.forEach( faq =>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})