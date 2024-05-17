
navigator.geolocation.getCurrentPosition(function (position) {
    let latitude = 55.73506;
    let longitude = 37.63893;
    let map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([longitude, latitude]),
            zoom: 18
        })
    })
});
window.addEventListener('scroll', progressBar);
$(document).ready(function(){
    $('.karusel').bxSlider({
        randomStart: true,
        infiniteLoop: true,
        auto: true,
        pause: 4000,
        
   
       });
    });
let condition = true;
$('.menu_small_icon').click(function (){
    if (condition) {
        condition = false;
        anime({
            targets: '.menu-small',
            translateX: ['-100%', '0'],
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            loop: false
        });
    } else {
        anime({
            targets: '.menu-small',
            translateX: ['0', '-100%'],
            easing: 'easeInOutQuad',
            direction: 'alternate',
            duration: 1000,
            loop: false
        });
        condition = true;
}
});
$(document).on('click', 'body', function (e) {
	$('<div class="cursor">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

function progressBar() {
    // Узнаем на сколько страница прокручена
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    // Узнаем высоту всей страницы
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Получаем в % на сколько прокручена страница
    let scrolled = scroll / height * 100;

    // Подставляем % прокрутки в ширину нашей линии
    document.getElementById('progressBar').style.width = scrolled + '%';
}

// Запускаем функцию, когда пользователя скролит
