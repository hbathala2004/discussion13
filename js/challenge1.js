// Styling the  h1 heading
window.addEventListener("load", function() {
  console.log(document.querySelector("h1"))
  document.querySelector("h1").classList.add("heading")
  })

// 2. Show current time and date when you double click and time zone 
document.addEventListener('dblclick', function() {
  alert(new Date().toLocaleString());
  const options = { timeZone: 'Eastern Standard Time', timeZoneName: 'short' };
   alert(formattedDate);
});

// 3. Toggle email field
  document.querySelector('#toggle').addEventListener('click', function() {
  document.querySelector('#emailBox').classList.toggle('hidden');
});



