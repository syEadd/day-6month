const drawerMenB = $('.drawer-menu-button');

function com(){
  const ppi = $(this).parent();
  ppi.toggleClass('is-open');
  ppi.toggleClass('is-active');

}
drawerMenB.on('click',com)


