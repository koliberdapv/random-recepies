const sidebar = document.querySelector('.sidebar');
const closeSidebarBtn = document.querySelector('.close-btn');
const openSidebarBtn = document.querySelector('.btn-bars');
const randomRecipeBtn = document.querySelector('.random-btn');
const randomRecipeContainer = document.querySelector('.answer-container');

openSidebarBtn.addEventListener('click', toggleSidebar);
closeSidebarBtn.addEventListener('click', toggleSidebar);
randomRecipeBtn.addEventListener('click', showRandomRecipe);

function toggleSidebar() {
  sidebar.classList.toggle('show-sidebar');
}

function showRandomRecipe() {
  randomRecipeContainer.classList.toggle('hidden');
}
