      import {switchTheme} from './darkmode.js';
      import {toggleBar} from './sidebar.js';
      
      const accessGithub = document.getElementById('fetch-github');
      accessGithub.addEventListener('click', () => {
        window.open('https://github.com/itsanup1','_blank');
      });
      
      const accessInsta = document.getElementById('fetch-instagram');
      accessInsta.addEventListener('click', () => {
        window.open('https://www.instagram.com/its_anup_patil?igsh=ZzE2NGMzZHg2dHo=','_blank');
      });
      
      const contactMeButton = document.getElementById('contact-me');
      contactMeButton.addEventListener('click',() => {
        window.location.href='Contact-me.html';
      });
      
      toggleBar();