<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  // Open and close modal functions
  function openStatisticModal(statistic) {
    document.getElementById('statisticTitle').textContent = statistic;
    document.getElementById('statisticModal').style.display = 'block';
    loadStatisticChart(); // Loads a placeholder chart for demonstration
  }

  function closeStatisticModal() {
    document.getElementById('statisticModal').style.display = 'none';
  }

  // Load chart based on selected time filter
  function loadStatisticChart() {
    const ctx = document.getElementById('statisticChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April'], // Example labels
        datasets: [{
          label: 'Average Invoice Amount',
          data: [1200, 1500, 1300, 1400], // Example data
          backgroundColor: 'rgba(32, 78, 207, 0.5)',
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
</script>