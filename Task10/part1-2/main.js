// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let submit = document.getElementById('submit')
let form = document.forms['f1']
submit.onclick = function (e)  {
  e.preventDefault();
  let block = document.createElement('div');
  let name = document.createElement('div');
  let surname = document.createElement('div');
  let age = document.createElement('div');

  block.classList.add('item','wrapper');

  name.innerText = `name - ${form.userName.value}`
  surname.innerText = `surname - ${form.userSurname.value}`
  age.innerText = `age - ${form.userAge.value}`;

  block.append(name,surname,age)
  document.body.appendChild(block);
}

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const count = localStorage.getItem('count')||0
const block2 = document.getElementById('count');
const newCount = (Number(count)+1).toString();

block2.innerText = `Count - ${newCount}`;
localStorage.setItem('count', newCount);


