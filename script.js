window.onload = function() {
    const canvas = document.querySelector("#myCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.globalCompositeOperation = "destination-over";
    hue = Math.random() * 360;
  
    let number = 5;
    let scale = 8;
    difX = canvas.width / 2; // Corrected typo: canvas.weight to canvas.width
    difY = canvas.height / 2; // Corrected typo: canvas.weight to canvas.height
  
    function drawFlower() {
      let angle = number * 90;
      let radius = scale * Math.sqrt(number);
      let positionX = difX + radius * Math.sin(angle); // Added difX
      let positionY = difY + radius * Math.cos(angle); // Added difY
  
      ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(positionX, positionY, number, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
  
      number += 0.6;
      hue += 0.4;
    }
  
    function animate() {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawFlower();
      if (number > 130) return;
      requestAnimationFrame(animate);
    }
  
    animate();
  };
  