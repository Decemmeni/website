document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('scrolling-image');
    let maxX;   // Maximum pixels we can move left
    let scrollTimer = null; // Future placeholder for delaying scroll image-changing
    let lastPos = null;
  
    // Recalculate maximum travel on load & resize
    function updateMaxX() {
      maxX = window.innerWidth;
    }
  
    function updatePosition() {
      const scrollTop = window.scrollY; 
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const fraction = Math.min(Math.max(scrollTop / docHeight, 0), 1);
      const offsetX = fraction * maxX;
      // translate(x, y): x negative → moves left; y negative keeps vertical centering
      img.style.transform = `translate(-${offsetX}px, -50%)`;

      // Flip
      //console.log("Current: " + offsetX);
      //console.log("Last: " + lastPos);
      /*if (offsetX > lastPos) {
        console.log("Moving left");
      } else {
        console.log("Moving right");
      } */
      // Animates the cat moving
      animate()
      lastPos = offsetX;
    }

    function animate() {
        if (img.src.indexOf("CatCar.png") === -1) {
            img.src = "CatCar.png";
          }
          
          clearTimeout(scrollTimer);
    
          scrollTimer = setTimeout(() => {
            img.src = "CatCarIdle.png";
          }, 150);
    }
  
    // Initial setup
    updateMaxX();
    updatePosition();
  
    window.addEventListener('resize', () => {
      updateMaxX();
      updatePosition();
    });
  
    // Throttle scroll events with requestAnimationFrame for performance
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updatePosition();
          ticking = false;
        });
        ticking = true;
    }
    });

    
  });