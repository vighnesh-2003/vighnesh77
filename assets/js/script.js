/*=============== PRELOADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=crollReveal({
    distance:"60px",
    duration:2000,
    delay:100
});

sr.reveal('.contact-headline, .projects-headline',{
    delay:500,
});
sr.reveal('.nav, .footer-home, .footer-social, skills-time, .projects-item',{
    origin:"top",
    interval:100,
});
sr.reveal('.contact-description, .contact-form',{
    origin:"left",
    interval:100,
});
sr.reveal('.hero-image',{origin:"top"});
sr.reveal('.hero-text');
/*=============== SHOW SCROLL UP ===============*/

/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById("contact-form"),
contactMessage=document.getElementById("contact-message"),
sendButton=document.querySelector("#contact-form button");

const sendEmail=async(e)=>{
    e.preventDefault();

    sendButton.disabled=true;
    sendButton.textContent='Sending...';


    try{
        await emailjs.sendForm(
        "service_o27pqey",
        "template_de7ecnu",
        "#contact-form",
        "jxeAn_f4Wkww6ymfv" 
        );
        contactMessage.textContent="Message sent Successfully";
        setTimeOut(()=>{
            contactMessage.textContent="";
        },4000);
        contactForm.reset();
    }
    catch (error){
        contactMessage.textContent="message not sent(service error)";
    }
    finally{
        sendButton.disabled=false;
        sendButton.textContent="Send Message";

    }
};
contactForm.addEventListener("submit", sendEmail);