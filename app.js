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
  });
  document.addEventListener('DOMContentLoaded', function() {
    const lorenzoImage = document.querySelector('.student-card:nth-child(1) .student-image');
    const gasparImage = document.querySelector('.student-card:nth-child(2) .student-image');

    const audioLorenzo = document.getElementById('audioLorenzo');
    const audioGaspar = document.getElementById('audioGaspar');


    audioLorenzo.volume = 0.2; 
    audioGaspar.volume = 0.2;   


    lorenzoImage.addEventListener('mouseenter', function() {

        if (!audioLorenzo.paused) {
            audioLorenzo.pause();
        }

        audioLorenzo.play();
    });


    gasparImage.addEventListener('mouseenter', function() {

        if (!audioGaspar.paused) {
            audioGaspar.pause();
        }

        audioGaspar.play();
    });


    lorenzoImage.addEventListener('mouseleave', function() {
        audioLorenzo.pause();  
    });


    gasparImage.addEventListener('mouseleave', function() {
        audioGaspar.pause();  
    });
});

