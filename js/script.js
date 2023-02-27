$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
   $(".slider").each(function () { // обрабатываем каждый слайдер
    var obj = $(this);
    $(obj).append("<div class='nav'></div>");
    $(obj).find("li").each(function () {
     $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
     $(this).addClass("slider"+$(this).index());
    });
    $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
   });
  });
  function sliderJS (obj, sl) { // slider function
   var ul = $(sl).find("ul"); // находим блок
   var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
   var step = $(bl).width(); // ширина объекта
   $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
  }
  $(document).on("click", ".slider .nav span", function() { // slider click navigate
   var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
   $(sl).find("span").removeClass("on"); // убираем активный элемент
   $(this).addClass("on"); // делаем активным текущий
   var obj = $(this).attr("rel"); // узнаем его номер
   sliderJS(obj, sl); // слайдим
   return false;
  });


  const form = document.getElementById("reservation-form");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const name = document.getElementById("name").value;
	const phone = document.getElementById("phone").value;
	const people = document.getElementById("people").value;
	const date = document.getElementById("date").value;
	const time = document.getElementById("time").value;

	console.log("Ім'я:", name);
	console.log("Номер телефону:", phone);
	console.log("Кількість людей:", people);
	console.log("Дата:", date);
	console.log("Час:", time);

	alert("Стіл заброньовано!");
	form.reset();
});