// Data
const reviews = [
  {
    id: 1,
    name: 'krysten ritter',
    job: 'web developer',
    img: 'https://www.formulatv.com/images/articulos/117000/117228_M671sLRFJigm5qc029P3EWkzHav4UoYxN-h2.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'margot robbie',
    job: 'web designer',
    img: './margot-robbie.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Keanu Reevs',
    job: 'intern',
    img: 'https://media.gq.com.mx/photos/5f57d52d4464f9b88fb26729/16:9/w_1920,c_limit/Keanu-Reeves.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'henry cavill',
    job: 'the boss',
    img: 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2023/07/10/henry-cavill.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// HTML References
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// First Item
let currentItem = 0;

// Helper
const setData = (iterator) => {
  img.src = iterator.img;
  author.textContent = iterator.name;
  job.textContent = iterator.job;
  info.textContent = iterator.text;
}

// Load initial item
window.addEventListener('DOMContentLoaded', () => {
  const item = reviews[currentItem];
  setData(item);
});

const showPerson = (person) => {
  const item = reviews[person];
  setData(item);
}

nextBtn.addEventListener('click', () => {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showPerson(currentItem);
});
