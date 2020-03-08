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

$(window).scroll(function(){
  if ($(this).scrollTop() > 20) {
     $('#navbar').addClass('scroll');
  } else {
     $('#navbar').removeClass('scroll');
  }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_bot").style.bottom = "0";
  } else {
    document.getElementById("nav_bot").style.bottom = "-72px";
  }
  prevScrollpos = currentScrollPos;
}