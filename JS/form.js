


// Анимация формы
let frm = document.querySelectorAll('.inpt');
let arrFormText = Array.from(frm);
let labelText = document.querySelectorAll('.input-text');
let labelArr = Array.from(labelText);
function textInForm(){
  for (let i = 0; i < labelArr.length; i++){
    labelArr[i].style.top = '-7px';
    labelArr[i].style.left = '12px';
    labelArr[i].style.fontWeight = '400';
    labelArr[i].style.letterSpacing = '0px';
    labelArr[i].style.color = '#929292'
  }
}
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

function animateChoice(){
  document.querySelector('.authorize_form').style.opacity = '1';
  document.querySelector('.authorize_form').style.height = '288px';
  document.querySelector('.authorize_form').style.transition = '';
  document.querySelector('#choice_form').style.display = 'none';
}
//Берём данные из формы
//let form = document.querySelector()
