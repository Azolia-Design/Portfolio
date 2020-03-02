var checkBox = document.getElementById('switch'); 
 
var theme = window.sessionStorage.getItem('data-theme');
if(theme) document.documentElement.setAttribute('data-theme', theme);
checkBox.checked = theme == 'light' ? true : false;
 
checkBox.addEventListener('change', function () {
  if(this.checked){
    trans();
    document.documentElement.setAttribute('data-theme', 'light');
    window.sessionStorage.setItem('data-theme', 'light');
  } else {
    trans();
    document.documentElement.setAttribute('data-theme', 'dark');
    window.sessionStorage.setItem('data-theme', 'dark');
  }
});


let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
    document.documentElement.classList.remove('transition')
    }, 1000)
} 
