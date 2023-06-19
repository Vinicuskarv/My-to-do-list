function mostrarTelaCheia() {
    var clockDiv = document.getElementById('time');
  
    var fullscreenDiv = document.createElement('div');
    fullscreenDiv.classList.add('fullscreen');
  

    function updateTime() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
  
      var time = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
      fullscreenDiv.textContent = time;
    }
  
    updateTime();
  
    var intervalId = setInterval(updateTime, 1000);
  
    document.body.appendChild(fullscreenDiv);
  
    clockDiv.classList.remove('clock');
  
    clockDiv.onclick = null;
  
    fullscreenDiv.onclick = function() {
      document.body.removeChild(fullscreenDiv);

      clockDiv.classList.add('clock');
      clockDiv.onclick = mostrarTelaCheia;
      clearInterval(intervalId);
    };
  }
  