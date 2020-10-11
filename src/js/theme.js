const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyEl = document.querySelector('body');
const checkboxThemeEl = document.querySelector('#theme-switch-toggle');

const currentTheme = localStorage.getItem('checkedTheme');
function storeCurrentTheme() {
    if (currentTheme) {
        bodyEl.classList.add(currentTheme);
    }
    if (bodyEl.classList.contains(theme.DARK)) {
        checkboxThemeEl.checked = true;
    }
} 
storeCurrentTheme();

checkboxThemeEl.addEventListener('change', onCheckboxCheck);
function onCheckboxCheck(e) {
    if (e.target.checked) {
        bodyEl.classList.add(theme.DARK);
        bodyEl.classList.remove(theme.LIGHT);
        
        localStorage.setItem('checkedTheme', theme.DARK);
    }
    else {
        bodyEl.classList.add(theme.LIGHT);
        bodyEl.classList.remove(theme.DARK);
        localStorage.setItem('checkedTheme', theme.LIGHT);
    }
}

