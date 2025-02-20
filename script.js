const pizzas = [
 { name: "Pizza Margherita", image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400" },
 { name: "Pizza Calabresa", image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=400" },
 { name: "Pizza Frango com Catupiry", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
 { name: "Pizza Portuguesa", image: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?w=400" },
 { name: "Pizza Quatro Queijos", image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400" },
];

const testimonials = [
 {
   name: "Cliente 1",
   text: "As melhores pizzas da região! Sempre fresquinhas e com um sabor incrível.",
   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
 },
 {
   name: "Cliente 2",
   text: "Atendimento rápido e pizzas deliciosas. Recomendo!",
   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
 },
 {
   name: "Cliente 3",
   text: "Minha escolha certa para os fins de semana!",
   image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
 },
];

const hours = [
 { day: "Segunda-feira", hours: "17:00–23:30" },
 { day: "Terça-feira", hours: "17:00–23:30" },
 { day: "Quarta-feira", hours: "17:00–23:30" },
 { day: "Quinta-feira", hours: "17:00–23:50" },
 { day: "Sexta-feira", hours: "17:00–23:50" },
 { day: "Sábado", hours: "17:00–23:50" },
 { day: "Domingo", hours: "17:00–23:30" },
];

const menuGrid = document.getElementById('menu-grid');
pizzas.forEach(pizza => {
 const menuItem = document.createElement('div');
 menuItem.className = 'menu-item';
 menuItem.innerHTML = `
   <img src="${pizza.image}" alt="${pizza.name}">
   <div class="menu-item-content">
     <h3>${pizza.name}</h3>
     <a href="#" class="order-button">
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"/><path d="m19 19-3.5-3.5"/></svg>
       Pedir
     </a>
   </div>
 `;
 menuGrid.appendChild(menuItem);
});

const testimonialsGrid = document.getElementById('testimonials-grid');
testimonials.forEach(testimonial => {
 const testimonialItem = document.createElement('div');
 testimonialItem.className = 'testimonial';
 testimonialItem.innerHTML = `
   <div class="testimonial-header">
     <img src="${testimonial.image}" alt="${testimonial.name}">
     <h3>${testimonial.name}</h3>
   </div>
   <p class="testimonial-text">${testimonial.text}</p>
 `;
 testimonialsGrid.appendChild(testimonialItem);
});

const hoursList = document.getElementById('hours-list');
hours.forEach(item => {
 const hoursItem = document.createElement('div');
 hoursItem.className = 'hours-item';
 hoursItem.innerHTML = `
   <span class="day">${item.day}</span>
   <span class="time">${item.hours}</span>
 `;
 hoursList.appendChild(hoursItem);
});
