//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const form = document.forms['age_checker'];
form.onsubmit = function (e) {
  e.preventDefault();
  let block = document.createElement('div');
  if (Number(this.age.value) < 18) {
    block.innerText = 'GO AWAY!'
    block.classList.add('wrong','wrapper');
  } else {
    block.innerText = 'WElCOME!'
    block.classList.add('right','wrapper');
  }
  document.body.appendChild(block);
}

