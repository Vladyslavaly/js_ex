'use strict'

$('.header__logo').click(() => alert('Hello Jquery!'));

$('.main__title').click(() => {
    $('.main__title').toggleClass('active');
})

$('.jquery__btn_hide').click(() => {
    $('.jquery__text').hide("slow");
    $('.jquery__title').addClass("red_text");
})

$('.add').click(() => {
    let newTitle = $(`<h3></h3>`).addClass('title_3');
    newTitle.text('Out Student is the Best!!!');
    $('.block').prepend(newTitle);
})

var addClass = function() {
    el.classList.add();
}



document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
    });
  });


