const sidebar = document.querySelector('.sidebar');
const closeSidebarBtn = document.querySelector('.close-btn');
const openSidebarBtn = document.querySelector('.btn-bars');
const randomRecipeBtn = document.querySelector('.random-btn');
const randomRecipeContainer = document.querySelector('.answer-container');
// const darkmodeBtn = document.querySelector('.darkmodeBtn');

openSidebarBtn.addEventListener('click', toggleSidebar);
closeSidebarBtn.addEventListener('click', toggleSidebar);
randomRecipeBtn.addEventListener('click', showRandomRecipe);
// darkmodeBtn.addEventListener('click', toggleDarkmode);

function toggleSidebar() {
  sidebar.classList.toggle('show-sidebar');
}

function showRandomRecipe() {
  randomRecipeContainer.classList.toggle('hidden');
}

// function toggleDarkmode() {
//   document.documentElement.classList.toggle('darkmode');
// }
