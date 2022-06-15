const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const btnBars = document.querySelector('.btn-bars');

btnBars.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
});

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});
