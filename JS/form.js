


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
  let authorizeForm = document.querySelector('.authorize_form');
  authorizeForm.style.opacity = '1';
  authorizeForm.style.height = '288px';
  authorizeForm.style.transition = '';
  document.getElementById('choice_form').style.display = 'none';
}
function animateSuccessForm(){
  const successForm = document.getElementById('success_form');
  successForm.style.opacity = '1'
  successForm.style.height = '170px';
  let authorizeForm = document.querySelector('.authorize_form');
  alertText.fontSize = '0px';
  authorizeForm.style.height = '0px';
  
  successForm.style.transition = '.3s';
}
//Берём данные из формы
//let form = document.querySelector()
