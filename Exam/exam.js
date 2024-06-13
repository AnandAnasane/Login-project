 // Set the time for 20 minutes
 var timeLeft = 20 * 60;
  
 // Function to update the timer every second
 function updateTimer() {
   var minutes = Math.floor(timeLeft / 60);
   var seconds = timeLeft % 60;
   
   // Add leading zeros if necessary
   var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
   
   // Update the timer display
   document.getElementById('timer').textContent = formattedTime;
   
   // Decrease the time left
   timeLeft--;
   
   // Check if the time has run out
   if (timeLeft < 0) {
     clearInterval(timerInterval);
     alert('Time is up!');
   }
 }
 
 // Call updateTimer function every second
 var timerInterval = setInterval(updateTimer, 1000);