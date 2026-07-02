//Grafica de las barras
const barras = document.getElementById('barras');

if (barras) {
    new Chart(barras, {
        type: 'bar',
        data: {
            labels: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio'
            ],
            datasets: [{
                label: 'Horas Sociales',
                data: [420, 510, 680, 740, 820, 930],
                backgroundColor: [
                    '#0d6efd',
                    '#198754',
                    '#ffc107',
                    '#dc3545',
                    '#20c997',
                    '#6610f2'
                ],
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

//Grafica Circular

const pastel = document.getElementById('pastel');

if (pastel) {
    new Chart(pastel, {
        type: 'doughnut',
        data: {
            labels: [
                'Completadas',
                'En proceso',
                'Pendientes'
            ],
            datasets: [{
                data: [18, 10, 4],
                backgroundColor: [
                    '#198754',
                    '#ffc107',
                    '#dc3545'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            cutout: '65%',
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

//Grafica Lineales

const linea = document.getElementById('linea');

if (linea) {
    new Chart(linea, {
        type: 'line',
        data: {
            labels: [
                'Lunes',
                'Martes',
                'Miércoles',
                'Jueves',
                'Viernes'
            ],
            datasets: [{
                label: 'Rendimiento',
                data: [70, 75, 82, 88, 95],
                fill: true,
                borderColor: '#0d6efd',
                backgroundColor: 'rgba(13,110,253,.15)',
                tension: .4,
                pointRadius: 5,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    min: 50,
                    max: 100
                }
            }
        }
    });
}