// Actualizar el valor de temperatura en la simulación

function actualizarValores() {
	const temperatureRange = document.getElementById('temperatura');
	const temperatureValue = document.getElementById('temp_value');
	temperatureRange.addEventListener('input', function () {
		temperatureValue.textContent = temperatureRange.value;
	});
}

// Simulación de impacto de incendios
function simularImpacto() {
	const temperatura = document.getElementById('temperatura').value;
	// Lógica para simular el impacto según la temperatura
	const resultado = `El aumento de la temperatura a ${temperatura}°C incrementa el riesgo de incendios en un 20%.`;
	document.getElementById('resultado-simulacion').innerText = resultado;
}

// Crear el mapa interactivo de incendios con Leaflet.js
var mapIncendios = L.map('map-incendios').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; OpenStreetMap contributors',
}).addTo(mapIncendios);

// Gráfico temporal con Chart.js
var ctx = document.getElementById('graficoImpacto').getContext('2d');
var graficoImpacto = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['2019', '2020', '2021', '2022', '2023'],
		datasets: [
			{
				label: 'Áreas afectadas por incendios (km²)',
				data: [100, 200, 300, 250, 320],
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 2,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});
