      const root = document.documentElement;
      let themeMode = '';
      
      function getTheme() {
        return localStorage.getItem("mode");
      }
      
      const themeSwitcher = document.getElementById('darkmode-toggle');
      
      export function switchTheme() {
        if (getTheme() === 'light') {
          root.style.setProperty('--primary-color', '#ffffff');
          root.style.setProperty('--secondary-color', '#121212');
          root.style.setProperty('--tertiary-color', '#f3f3f3');
          root.style.setProperty('--box-shadow-main', '#00000066');
          root.style.setProperty('--box-shadow-hover', '#10a3ff99');
          themeSwitcher.innerHTML = `<img src="icons/dark-mode.svg">`;
        } else if (getTheme() === 'dark') {
          root.style.setProperty('--primary-color', '#121212');
          root.style.setProperty('--secondary-color', '#efefef');
          root.style.setProperty('--tertiary-color', '#292929');
          root.style.setProperty('--box-shadow-main', '#f3f3f36c');
          root.style.setProperty('--box-shadow-hover', '#10a3ff99');
          themeSwitcher.innerHTML = `<img src="icons/light-mode.svg">`;
        }
      }
      
      switchTheme();
      
      const darkButton = document.getElementById('darkmode-toggle');
      darkButton.addEventListener('click', () => {
        if (getTheme() === null) {
          localStorage.setItem("mode", "light");
        } else if (getTheme() === 'light') {
          localStorage.setItem("mode", "dark");
        } else {
          localStorage.setItem("mode", "light");
        }
        switchTheme();
      });