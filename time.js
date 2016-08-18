	/* Cambio de Hora y de Fondo */

	var hour_container = document.getElementById('reloj');

	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	hour_container.innerHTML = hour+":"+minutes+":"+seconds;

	var intervalo = setInterval(
		function(){timer();}, 1000
	);

	function timer () {
		date = new Date();
		hour = date.getHours();
		minutes = date.getMinutes();
		seconds = date.getSeconds();

		hour_container.innerHTML = hour+":"+minutes+":"+seconds;
	}

		if(hour <= 12){
			var banner = document.getElementById('BannerLanding');
			banner.style.backgroundImage = "url('files/img/flat-day.png')";
		}

		if(hour > 12){
			var banner = document.getElementById('BannerLanding');
			banner.style.backgroundImage = "url('files/img/flat-sunfall.jpg')";
		}

		if(hour >= 18){
			var banner = document.getElementById('BannerLanding');
			banner.style.backgroundImage = "url('files/img/flat-night.png')";
		}