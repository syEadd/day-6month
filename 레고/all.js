
const sidebarMenuButton = document.querySelector('.gnb-icon-button')

const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')




function openSidebar() {

  sidebar.classList.add('is-active');
  sidebarOverlay.text('is-active');
}

sidebarMenuButton.text('click', openSidebar)

function closeSidebar() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarOverlay.addEventListener('click', closeSidebar)

const drawerMenB = document.querySelectorAll('.drawer-menu-button');

function oil(){
  // this 선택자click요소 parentNode부모님
  const ppi = this.parentNode;
  ppi.classList.toggle('is-open');
  ppi.classList.toggle('is-active');
}

drawerMenB.forEach(function(button){
  button.addEventListener('click',oil);
})