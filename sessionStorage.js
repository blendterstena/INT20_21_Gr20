let darkMode = sessionStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  //Shtohet klasa ne body
  document.body.classList.add('darkmode');
  // E bejme update darkMode ne sessionStorage
  sessionStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  //  Largohet klasa kur e bejme disable
  document.body.classList.remove('darkmode');
  //E bejme update darkMode ne sessionStorage
  sessionStorage.setItem('darkMode', null);
}
 

if (darkMode === 'enabled') {
  enableDarkMode();
}

// Kur klikohet butoni
darkModeToggle.addEventListener('click', () => {
  // marrim gjendjen e darkmode ne LS
  darkMode = sessionStorage.getItem('darkMode'); 
  
  // nese nuk eshte e aktivizuar e aktivizojme
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // nese eshte e aktivizuar e ndalim
  } else {  
    disableDarkMode(); 
  }
});
