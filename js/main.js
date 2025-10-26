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

