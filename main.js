// filter-knop pijltje turn

let buttons = document.querySelectorAll('.filter-knop');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        let pijl = button.querySelector('img');
        pijl.classList.toggle('turn');
    });
});
