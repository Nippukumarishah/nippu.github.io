let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText =()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);

    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000)

/* ======active menu =====*/
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove('active'));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener('scroll',activeMenu);

/* ====== email ====== */
const contactForm =document.getElementById('contact-form'),
      contactName =document.getElementById('contact-name'),
      contactEmail =document.getElementById('contact-email'),
      contactProject =document.getElementById('contact-project'),
      contactMessage =document.getElementById('contact-message')
const sendEmail = (e) =>{
e.preventDefault();

if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '' ){
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    contactMessage.textContent = 'Write all the input fields'

}else{
    emailjs.sendForm('service_iahiu0d','template_l94awa8','#contact-form','GTW-LR8Ni9B9nbQMs')
        .then(() =>{
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent'

            setTimeout(() =>{
                contactMessage.textContent = ''
            },4000)
        },(error) =>{
            alert('OOPS! SOMETHING HAS FAILD...', error)
        })
        contactName.value = ""
        contactEmail.value = ''
        contactProject.value = ''
}
}
contactForm.addEventListener('submit',sendEmail)

/* ==== sticky navbar ==== */
const header =document.querySelector('header');
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})
/* === toggle icon navbar ===*/
let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}
window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

