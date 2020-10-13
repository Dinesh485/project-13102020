$(document).ready(() => {
  $('.btns .menu-btn').click(() => {
    $('.menu-btn .first').toggleClass('first-rotate');
    $('.menu-btn .third').toggleClass("third-rotate");
    $('.menu-btn .second').toggleClass('second-rotate');
    $('.menu-btn span').toggleClass('menu-btn-color')
    $('.menu').toggleClass("menu-drop");
  })
})