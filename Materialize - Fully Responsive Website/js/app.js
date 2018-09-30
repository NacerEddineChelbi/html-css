$(document).ready(function () {

  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.datepicker').datepicker({
    disableWeekends: true,
    yearRange: 1
  });
  $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy();

});

window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if (this.scrollY <= 10) nav.className = 'nav-wrapper transparent';
  else nav.className = 'nav-wrapper red';
};