// 1. Selecteer alle knoppen met de class 'vacature-knop'
let vacatureknoppen = document.querySelectorAll('.vacature-knop');

// 2. Definieer de event-handler
let zoomIn = function (event) {
  event.preventDefault(); // Zorg dat de link niet meteen volgt
  event.target.classList.toggle('zoom-in');
};

// 3. Koppel de event-handler aan het 'click' event voor elke knop
vacatureknoppen.forEach(knop => {
  knop.addEventListener('click', zoomIn);
});
