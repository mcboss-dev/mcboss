function changeItem1() {
    document.getElementById('silw1').style.borderColor = 'yellow';
  }// функция, которая сработает при наведении.
  //она означает - выбрать элемент к Id у которого надо что-то изменить.
  // когда в скобки где написано one-two добавите Id своего элемента
  function rechangeItem1() {
    document.getElementById('silw1').style.borderColor = 'white';
  }// тут всё также. но наобарот. протсес происходящий про отводе курсора.

  function changeItem2() {
    document.getElementById('silw2').style.borderColor = 'yellow';
  }// функция, которая сработает при наведении.
  //она означает - выбрать элемент к Id у которого надо что-то изменить.
  // когда в скобки где написано one-two добавите Id своего элемента
  function rechangeItem2() {
    document.getElementById('silw2').style.borderColor = 'white';
  }// тут всё также. но наобарот. протсес происходящий про отводе курсора.
  
  function changeItem3() {
    document.getElementById('silw3').style.borderColor = 'yellow';
  }// функция, которая сработает при наведении.
  //она означает - выбрать элемент к Id у которого надо что-то изменить.
  // когда в скобки где написано one-two добавите Id своего элемента
  function rechangeItem3() {
    document.getElementById('silw3').style.borderColor = 'white';
  }// тут всё также. но наобарот. протсес происходящий про отводе курсора.

  function changeItem4() {
    document.getElementById('silw4').style.borderColor = 'yellow';
  }// функция, которая сработает при наведении.
  //она означает - выбрать элемент к Id у которого надо что-то изменить.
  // когда в скобки где написано one-two добавите Id своего элемента
  function rechangeItem4() {
    document.getElementById('silw4').style.borderColor = 'white';
  }// тут всё также. но наобарот. протсес происходящий про отводе курсора.

  $(document).ready(function(){
    $('.art_line_slider').slick({
      
    });

    $('.burger_menu').click(function(event)
    {
      $('.burger_menu, .burger_menu_list').toggleClass('active_menu')
    });
  });


window.onload = function(){

  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';

};
  /* 
  
$('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('activate');
        $('body').toggleClass('lock');
    });
    $('textarea').val('');
   $('.input__submit').click(function(event){
        $('.input__submit').addClass('buttonevent');
        setTimeout(function(){
            $('.input__submit').removeClass('buttonevent');
        }, 150);
   });

  */

