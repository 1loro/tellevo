document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const mobileNav = document.querySelector('.mobile-nav');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });

  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });

  
  const lorenzoCard = document.querySelector('.student-card:nth-child(1)');
  const gasparCard = document.querySelector('.student-card:nth-child(2)');

  const audioLorenzo = document.getElementById('audioLorenzo');
  const audioGaspar = document.getElementById('audioGaspar');

  audioLorenzo.volume = 0.2;  
  audioGaspar.volume = 0.2;   


  lorenzoCard.addEventListener('mouseenter', function() {
     
      if (!audioLorenzo.paused) {
          audioLorenzo.pause();
      }
      audioLorenzo.play();  
  });

  
  gasparCard.addEventListener('mouseenter', function() {
      
      if (!audioGaspar.paused) {
          audioGaspar.pause();
      }
      audioGaspar.play();  
  });

  
  lorenzoCard.addEventListener('mouseleave', function() {
      audioLorenzo.pause();  
  });


  gasparCard.addEventListener('mouseleave', function() {
      audioGaspar.pause();  
  });
});
