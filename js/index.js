let btnmenu=document.querySelector('.btnmenu');
let meun=document.querySelector('.meun');
let overlay=document.querySelector('.overlay');
let openporject=document.querySelector('.openporject');
let porject_one=document.querySelector('.one');
let cloes=document.querySelectorAll('.cloes');
let porject_tow=document.querySelector('.tow');
let openporject_tow=document.querySelector('.openporject_tow');
let contiune=document.querySelector('.contiune');
let massage=document.querySelector('.massage');
let btnGit=document.querySelector('.got')
btnmenu.addEventListener('click',()=>{
    meun.classList.toggle('active')
    overlay.classList.toggle('overlay-block')
    if(meun.className.includes('active')){
        btnmenu.src='../images/icon-close-menu.svg'
    }

    else{
        console.log(false);
        btnmenu.src='../images/icon-hamburger.svg' 
    }
});
openporject.addEventListener('click',()=>{
    overlay.classList.add('overlay-block');
    porject_one.style.display='block'
})
cloes[0].addEventListener('click',()=>{
    overlay.classList.remove('overlay-block')
    porject_one.style.display='none'
})
openporject_tow.addEventListener('click',()=>{
    overlay.classList.add('overlay-block');
    porject_tow.style.display='block'
})
cloes[1].addEventListener('click',()=>{
    overlay.classList.remove('overlay-block')
    porject_tow.style.display='none'
})

contiune.addEventListener('click',()=>{
    overlay.classList.add('overlay-block');
    porject_tow.style.display='none'
    massage.style.display='block';
})
btnGit.addEventListener('click',()=>{
    overlay.classList.remove('overlay-block')
    massage.style.display='none'
})