const navSlide =()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', ()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

            //Animate Links
        navLinks.forEach((link, index)=>{
           //  if(link.style.animation){
           //    link.style.animation=''
           // }else{
              link.style.animation = `navLinkFade 2s ease forwards ${index/7 +0.5 }s`;
           // }
          console.log(index);
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });
}
navSlide();