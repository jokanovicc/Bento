// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = ' Vladimir';

// Here you can change your greetings
const gree1 = 'Idi spavaj!  ';
const gree2 = 'Dobro jutro!  ';
const gree3 = 'Dobar dan!  ';
const gree4 = 'Prijatno veče,  ';
const gree5 = 'Prijatno veče,  ';
const gree6 = 'Prijatno veče,  ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else {
  document.getElementById('greetings').innerText = gree4 + name;
}
