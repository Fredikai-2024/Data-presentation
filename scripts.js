document.addEventListener('DOMContentLoaded', () => {
    const expenseTypeSelect = document.getElementById('expenseType');
    const studentNameSelect = document.getElementById('studentName');
    const barChartDiv = document.getElementById('barChart');
    const pieChartDiv = document.getElementById('pieChart');
    const lineChartDiv = document.getElementById('lineChart');

    // Example data (Replace with actual data fetching logic)
    const data = {
        expenses: [
            { date: '2024-01-01', type: 'Books', amount: 100, student: 'John' },
            { date: '2024-01-02', type: 'Supplies', amount: 50, student: 'Jane' },
            // Add more data as needed
        ],
        expenseTypes: ['Books', 'Supplies', 'Tuition'],
        students: ['John', 'Jane']
    };

    // Populate dropdowns
    data.expenseTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        expenseTypeSelect.appendChild(option);
    });

    data.students.forEach(student => {
        const option = document.createElement('option');
        option.value = student;
        option.textContent = student;
        studentNameSelect.appendChild(option);
    });

    // Function to render charts
    function renderCharts() {
        // Clear previous charts
        barChartDiv.innerHTML = '';
        pieChartDiv.innerHTML = '';
        lineChartDiv.innerHTML = '';

        // Example using Chart.js (Include Chart.js library in HTML)
        const ctxBar = document.createElement('canvas');
        barChartDiv.appendChild(ctxBar);

        const ctxPie = document.createElement('canvas');
        pieChartDiv.appendChild(ctxPie);

        const ctxLine = document.createElement('canvas');
        lineChartDiv.appendChild(ctxLine);

        const barChart = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: data.expenseTypes,
                datasets: [{
                    label: 'Expenses',
                    data: data.expenses.filter(e => e.type === expenseTypeSelect.value).map(e => e.amount),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            }
        });

        const pieChart = new Chart(ctxPie, {
            type: 'pie',
            data: {
                labels: data.expenseTypes,
                datasets: [{
                    label: 'Expenses',
                    data: data.expenses.map(e => e.amount),
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                    borderWidth: 1
                }]
            }
        });

        const lineChart = new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: data.expenses.map(e => e.date),
                datasets: [{
                    label: 'Expenses Over Time',
                    data: data.expenses.map(e => e.amount),
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }]
            }
        });
    }

    // Render charts initially
    renderCharts();

    // Event listeners for dropdowns
    expenseTypeSelect.addEventListener('change', renderCharts);
    studentNameSelect.addEventListener('change', renderCharts);
});
