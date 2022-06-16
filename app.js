const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const btnBars = document.querySelector('.btn-bars');
const randomBtn = document.querySelector('.random-btn');
const asnwerContainer = document.querySelector('.answer-container');

btnBars.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
});

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});

randomBtn.addEventListener('click', function () {
  asnwerContainer.classList.toggle('hidden');
});
