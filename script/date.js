function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
  
    const [weekday, monthDay, year] = formattedDate.split(', ');
    const [month, day] = monthDay.split(' ');
  
    document.getElementById('weekday').textContent = weekday + ',';
    document.getElementById('month').textContent = month;
    document.getElementById('day').textContent = day;
    document.getElementById('year').textContent = year;
  }
  
  updateDateTime();
  setInterval(updateDateTime, 1000);