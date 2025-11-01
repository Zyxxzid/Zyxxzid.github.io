window.addEventListener('scroll', function() {
    const revaeal = document.querySelectorAll('.card-project')
    for (let i = 0; i< revaeal.length; i++) {
        let window1 = window.innerHeight
        let revealTop = revaeal[i].getBoundingClientRect().top
        let revealPoint = revaeal[i].offsetHeight;
        
        let layar = revealPoint * 0.1

        if (revealTop < window1 - layar) {
            revaeal[i].classList.add('active')
        } else {
            revaeal[i].classList.remove('active')
        }
       
    }
})

window.addEventListener('scroll', function() {
    const revaeal = document.querySelectorAll('.box')
    for (let i = 0; i< revaeal.length; i++) {
        let window1 = window.innerHeight
        let revealTop = revaeal[i].getBoundingClientRect().top
        let revealPoint = revaeal[i].offsetHeight;
        
        let layar = revealPoint * 0.5

        if (revealTop < window1 - layar) {
            revaeal[i].classList.add('active')
        } else {
            revaeal[i].classList.remove('active')
        }
       
    }
})


const body = document.querySelector('body');
const toggleTheme = document.querySelector('.icons-menu i');

toggleTheme.addEventListener('click', function() {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    toggleTheme.classList.replace('fa-sun', 'fa-moon');
  } else {
    toggleTheme.classList.replace('fa-moon', 'fa-sun');
  }
});

const menuDown = document.querySelector('.icons-menu #menu');
const navbarMenu = document.querySelector('nav .navbar-menu');
menuDown.addEventListener('click', function () {
  navbarMenu.classList.toggle('active');
});

