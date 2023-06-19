function updatetime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var time = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    document.getElementById('time').textContent = time;
  }

  setInterval(updatetime, 1000);

  var timerInterval;
  var milliseconds = 0;
  var isRunning = false;

  function updateClock() {
    var hours = Math.floor(milliseconds / 3600000); // Obtém as horas
    var minutes = Math.floor((milliseconds % 3600000) / 60000);
    var seconds = Math.floor((milliseconds % 60000) / 1000);
    var millisecondsDisplay = (milliseconds % 1000).toString().padStart(3, '0');
  
    var time = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    document.getElementById('clock').textContent = time;
  }

  function startTimer() {
    if (!isRunning) {
      timerInterval = setInterval(function() {
        milliseconds += 10;
        updateClock();
      }, 10);
      isRunning = true;
    }
  }

  function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
  }

  function resetTimer() {
    clearInterval(timerInterval);
    milliseconds = 0;
    updateClock();
    isRunning = false;
  }
  