const ai = document.querySelector(".assistent__ai");
const homeSlider = document.querySelector(".home__image.slider");
const aboutSlider = document.querySelector(".about__image.slider");
const forms = document.querySelector(".home__account-card");

const getCarsImages = async (brand = "Ferrari") => {
  const url = `https://api.unsplash.com/search/photos?query=${brand} car&per_page=10&client_id=TYK-Ad1apvFqyMetMlOGmFd194WZxIq7TAk6DXK-Vjc`;

  const { results } = await fetch(url).then((res) => res.json());

  const carImages = results.map((carContent) => {
    return carContent.urls.regular;
  });

  return carImages;
};
const aiPrompt = async (element) => {
  const questionName = prompt("Olá, qual seu nome?");

  if (questionName.length < 3 || !questionName || !isNaN(questionName)) {
    alert("Digite um nome válido!");
    aiPrompt();
  }

  const questionCar = prompt(`Olá ${questionName}, qual o seu carro favorito?`);

  if (questionName.length < 3 || !questionName || !isNaN(questionName)) {
    alert("Digite um carro válido!");
    aiPrompt();
  }

  alert(
    `Ok ${questionName}, seu carro favorito é o '${questionCar}', anotado!`
  );

  element.textContent = `VoltAi, para que você (${questionName}) saiba mais sobre '${questionCar}'`;
  const carImages = await getCarsImages();
  slideShow(homeSlider, carImages);
  slideShow(aboutSlider, carImages, carImages.length - 1);
};
const slideShow = (slider, imagesUrl, actualImage = 0, timeout = false) => {
  if (slider && imagesUrl) {
    if (timeout) {
      if (imagesUrl.length == actualImage) {
        actualImage = 0;
      }
      slider.src = `${imagesUrl[actualImage]}`;
    }
  }

  setTimeout(() => {
    slideShow(slider, imagesUrl, actualImage + 1, true);
  }, 3000);
};
const createAccount = () => {
  const name = document.querySelector("input#name").value;
  const email = document.querySelector("input#email").value;
  const password = document.querySelector("input#password").value;

  if (name && email && password) {
    window.location.href = '../Home/index.html';

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }
};


forms.addEventListener("submit", (event) => {
  event.preventDefault();
  createAccount()
});
slideShow(homeSlider, [
  "../../../public/assets/images/Home-image.png",
  "../../../public/assets/images/About-image.png",
]); // activate slide show
