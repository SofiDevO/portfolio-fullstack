export const getIMGAverageColor = (img, brightness = 1, onerror = () => {}) => {
	// Se crea un elemento canvas para poder acceder a los píxeles de la imagen.
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');  // Obtiene el contexto 2D del canvas.
	let data;
	canvas.width = img.width;   // Ajusta el ancho del canvas al ancho de la imagen.
	canvas.height = img.height; // Ajusta la altura del canvas a la altura de la imagen.

	// Bloque try-catch para manejar errores de acceso a los píxeles de la imagen.
	try {
		// Verifica si el contexto 2D fue creado correctamente.
		if (!ctx) {
			// Llama a la función de manejo de errores si no se pudo obtener el contexto.
			onerror?.(new Error('Could not get 2d context'));
			return ['', {}]; // Devuelve valores por defecto en caso de error.
		}
		// Dibuja la imagen en el canvas en la posición (0, 0).
		ctx.drawImage(img, 0, 0);

		// Obtiene los datos de imagen del canvas.
		const imageData = ctx.getImageData(0, 0, img.width, img.height);
		data = imageData.data;  // Accede a los datos de píxeles (un array de RGBA).
	} catch (error) {
		// Llama a la función de manejo de errores si ocurre una excepción.
		onerror?.(error);
		return ['', {}]; // Devuelve valores por defecto en caso de error.
	}

	// Variables para almacenar la suma total de los colores.
	let red = 0;
	let green = 0;
	let blue = 0;

	// Recorre los datos de los píxeles para sumar los valores de rojo, verde y azul.
	for (let i = 0; i < data.length; i += 4) {
		red += data[i];       // Suma el valor del componente rojo.
		green += data[i + 1]; // Suma el valor del componente verde.
		blue += data[i + 2];  // Suma el valor del componente azul.
	}

	// Calcula el número total de píxeles.
	const numberOfPixels = canvas.width * canvas.height;

	// Obtiene el brillo promedio si está definido como un atributo en la imagen.
	const dataBrightness = parseFloat(img.getAttribute('average-brightness') || '');
	brightness = dataBrightness || brightness; // Usa el brillo obtenido o el valor por defecto.

	// Calcula el promedio de cada componente de color y ajusta el brillo.
	red = (red / numberOfPixels) * brightness;
	green = (green / numberOfPixels) * brightness;
	blue = (blue / numberOfPixels) * brightness;

	// Asegura que los valores de color no sean menores a 0.
	const average = {
		red: red < 0 ? 0 : red,
		green: green < 0 ? 0 : green,
		blue: blue < 0 ? 0 : blue,
	};

	// Crea una cadena de color RGB con los valores promedio ajustados.
	const rgb = `rgb(${average.red}, ${average.green}, ${average.blue})`;

	// Devuelve el color promedio como una cadena RGB y como un objeto con valores de rojo, verde y azul.
	return [rgb, average];
};
