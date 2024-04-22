window.addEventListener("load", ()=>{
	let long;
	let lat;
	let temperaturaDescripcion = document.querySelector('.temperatura-descripcion');
	let temperaturaGrados = document.querySelector('.temperatura-grados');
	let temperaturaFarenheit = document.querySelector('.temperatura-farenheit');
	let horaLugar = document.querySelector('.hora-lugar');
	let icono = document.querySelector('.icono') 



	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position =>{
		console.log(position);
		long = position.coords.longitude;
		lat = position.coords.latitude;

		const api = `http://api.weatherapi.com/v1/current.json?key=1490b798d5614fddb6b200956232108&q=${lat},${long}&days=1`;
		fetch(api)
			.then(response =>{
        		if (!response.ok) {
            		throw new Error('No se pudo obtener la información del clima');
        		}
				return response.json();
			})
			.then(data => {
				//La siguiente linea es para ver lo que conseguimos por consola
				console.log(data);

				const {temp_c, temp_f} = data.current;
				const {text, icon} = data.current.condition;
				const {localtime} = data.location;
				const isDay = data.current.is_day;

				console.log(icon);
				console.log(isDay);

				// Extraer el nombre del archivo del icono
        		const iconFilename = icon.split('/').pop(); // Obtiene el último segmento de la URL
        		console.log(iconFilename);

				// Crear la imagen del icono y establecer su ruta local

        		const iconPath = isDay ? `./assets/icons/day/${iconFilename}` : `./assets/icons/night/${iconFilename}`;

        		const image = document.createElement('img');
                image.src = iconPath;
                console.log(iconPath);

				//Ponemos la informacion de la API en los elementos clasificados de nuestro HTML
				temperaturaGrados.textContent = temp_c;
				temperaturaFarenheit.textContent = temp_f;
				horaLugar.textContent = localtime;
				temperaturaDescripcion.textContent = text;
				icono.src = image;

				document.querySelector('.icono').appendChild(image);

			})
		});


	}else{
	h1.textContent = "Necesitas permitir la geolocalización para que esta pagina funcione";
	}
});