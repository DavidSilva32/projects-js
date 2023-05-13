// Cards

const cards = [
  {
    id: 1,
    img: "img/calculator.jpeg",
    title: "Calculator IMC",
    text: "IMC-Calculator. A very interesting project for me! Using <strong>JavaScript</strong> and <strong>Framework Bootstrap</strong>",
    live: "https://davidsilva32.github.io/projects-js/calculator-imc/",
    code: "https://github.com/DavidSilva32/projects-js/tree/main/calculator-imc",
  },
  {
    id: 2,
    img: "img/lamp.jpg",
    title: "Dynamic lamp",
    text: "Lamp project, there are a lot of possible interactions in this project. Discover them all! I used <strong>JavaScript</strong> and <strong>Framework Bootsrap</strong>.",
    live: "https://davidsilva32.github.io/projects-js/02-lamp/index.html",
    code: "https://github.com/DavidSilva32/projects-js/tree/main/02-lamp",
  },
  {
    id: 3,
    img: "img/traffic-light.jpg",
    title: "Traffic Light",
    text: "using Sass, bootstrap and JavaScript. I learned a lot of about setInterval and clearInterval.",
    live: "https://davidsilva32.github.io/projects-js/03-traffic-light/index.html",
    code: "https://github.com/DavidSilva32/projects-js/tree/main/03-traffic-light",
  },
  {
    id: 4,
    img: "img/slideshow.jpg",
    title: "Slideshow",
    text: "In this project, i learned about slide and creating elements in <strong>JavaScript</strong>.",
    live: "https://davidsilva32.github.io/projects-js/04-slideshow/index.html",
    code: "https://github.com/DavidSilva32/projects-js/tree/main/04-slideshow",
  },
];

const containerCards = document.querySelector("#container-cards");

const loadCards = (cards, container) => {
  cards.forEach(({ id, img, title, text, live, code }) => {
    container.innerHTML += `
            <div class="col-12 col-lg-6 mb-4" ${id}>
                <div class="card bg-dark text-light shadow">
                    <img src="${img}" class="img card-img-top" alt="Calculator IMC">
                    <div class="card-body">
                        <h2 class="card-title">${title}</h2>
                        <p class="card-text">${text}</p>
                        <a href="${live}" target="_blank" rel="external" class="btn btn-primary">Live</a>
                        <a href="${code}" target="_blank" rel="external" class="btn btn-outline-primary">Code</a>
                    </div>
                </div>
            </div>
        `;
  });
};

loadCards(cards, containerCards);

// Footer Year

const date = new Date();
const year = date.getFullYear();
document.getElementById("paragraph").textContent += ` - ${year}`;
