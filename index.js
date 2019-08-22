
let hypno = document.querySelector('.hypno');
hypno.addEventListener('click', () => {
    if (hypno.classList.contains('turn')) {
        hypno.classList.remove('turn');
    }
    hypno.classList.add('turn');
    setTimeout(() => { hypno.classList.remove('turn'); }, 2000);

})

