// JavaScript for handling collapsible content
$(document).ready(function(){
  $(".collapsible h3").click(function(){
    $(this).next(".content").slideToggle();
  });

  $(".collapsible-set h3").click(function(){
    $(this).next(".content").slideToggle();
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const groomingGrid = document.getElementById('grooming-grid');
    const groomingServices = [
        { name: 'Bathing', description: 'Includes shampoo and conditioner' },
        { name: 'Haircut', description: 'Professional grooming and styling' },
        { name: 'Nail Trimming', description: 'Careful trimming to ensure safety' },
        // Add more grooming services as needed
    ];

    groomingServices.forEach(service => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
        groomingGrid.appendChild(gridItem);
    });
});
