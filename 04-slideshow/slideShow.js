const images = [
  { id: 1, url: "./img/chrono.jpg" },
  { id: 2, url: "./img/inuyasha.jpg" },
  { id: 3, url: "./img/ippo.png" },
  { id: 4, url: "./img/tenchi.jpg" },
  { id: 5, url: "./img/tenjhotenge.jpg" },
  { id: 6, url: "./img/yuyuhakusho.jpg" },
];

const containerItems = document.querySelector("#container-items");

const loadImages = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
            <div class="item" id="${image.id}">
                <img src="${image.url}"></img>
            </div>
        `;
  });
};

loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const next = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll(".item");
};

const previous = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll(".item");
};

document.querySelector("#previous").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);

// Change Theme

document
  .querySelector("#check")
  .addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
