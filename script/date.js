const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const now = new Date();
const dayName = days[now.getDay()];
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = now.toLocaleDateString('en-US', options);
document.getElementById('current-date').innerText = `${dayName}, 
    ${formattedDate}`;
