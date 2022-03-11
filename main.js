//Берём данные из form.js и Data.js
let inputs = document.querySelectorAll('.authorize_form label .inpt');
let submitButton = document.getElementById('button');
let formInputArr = Array.from(inputs);
let you = function getFormContent(content){
    for(let i = 0; i < content.length; i++){
        console.log(content[i].value);
    }
}
submitButton.addEventListener('click', () =>{you(formInputArr);});


let DataObjects = JSONData.data;


function submitForm(event){
    event.preventDefault();
    window.history.back();
  }
function validateForm(array){
   //array.filter(item =>{
   //     if()
   // })
}
//validateForm(DataObject)