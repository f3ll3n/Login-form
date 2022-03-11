
// Анимация формы
let frm = document.querySelectorAll('.inpt');
let arrFormText = Array.from(frm);
let formMethod = arrFormText.map(el =>{
    el.addEventListener('focus', inpFoc =>{
        el.parentElement.children[0].style.top = '-40px';
        el.parentElement.children[0].style.fontWeight = '400';
        el.parentElement.children[0].style.letterSpacing = '1px';
        el.parentElement.children[0].style.left = '5px';
        el.parentElement.children[0].style.color = '#d8d8d8';
    })
    el.addEventListener('blur', inpBlur =>{
        if(el.value == false){
          el.parentElement.children[0].style.top = '-7px';
          el.parentElement.children[0].style.left = '12px';
          el.parentElement.children[0].style.fontWeight = '400';
          el.parentElement.children[0].style.letterSpacing = '0px';
          el.parentElement.children[0].style.color = '#929292'
        }
      })
})

//Берём данные из формы
//let form = document.querySelector()
