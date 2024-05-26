const ai = document.querySelector(".assistent__ai");
const aiSubtitle = document.querySelector(".assistent__subtitle");
const homeSlider = document.querySelector(".home__image.slider");
const aboutSlider = document.querySelector(".about__image.slider");
const accountButton = document.querySelector(".clickables__button");
const linkButton = document.querySelector(".button-link");

const getCarsImages = async (brand = "Ferrari") => {
  const url = `https://api.unsplash.com/search/photos?query=${brand} car&per_page=10&client_id=TYK-Ad1apvFqyMetMlOGmFd194WZxIq7TAk6DXK-Vjc`

  const {results} = await fetch(url).then(res => res.json());

  const carImages = results.map(carContent => {
    return carContent.urls.regular
  })

  return carImages;
}

const aiPrompt = async (element) => {
  const questionName = prompt("Olá, qual seu nome?");

  if (
    questionName.length < 3 ||
    !questionName ||
    !isNaN(questionName)
  ) {
    alert("Digite um nome válido!");
    aiPrompt();
  }

  const questionCar = prompt(`Olá ${questionName}, qual o seu carro favorito?`);

  if (
    questionName.length < 3 ||
    !questionName ||
    !isNaN(questionName)
  ) {
    alert("Digite um carro válido!");
    aiPrompt();
  }

  alert(
    `Ok ${questionName}, seu carro favorito é o '${questionCar}', anotado!`
  );

  element.textContent = `VoltAi, para que você (${questionName}) saiba mais sobre '${questionCar}'`;
  const carImages = await getCarsImages()
  slideShow(homeSlider, carImages)
  slideShow(aboutSlider, carImages, (carImages.length - 1))
};
const slideShow = (slider, imagesUrl, actualImage = 0, timeout = false) => {
  if (slider && imagesUrl) {
    if (timeout) {
      if (imagesUrl.length == actualImage) {
        actualImage = 0
      }
      slider.src = `${imagesUrl[actualImage]}`
    }
  }

  setTimeout(() => {
    slideShow(slider, imagesUrl, (actualImage + 1), true);
  }, 3000)
}
const getAccount = () => {
  const name = localStorage.getItem("name")
  if (!name) {
    alert("Você precisa estar logado, vamos te redirecionar para fazer o login!")
    window.location.href = '../Account/index.html';
  }

  // const password = document.cookie.split('=')[1].split(',')[2]
  accountButton.textContent = name;
  linkButton.href = "#"
}

getAccount()
linkButton.addEventListener("click", () => {
  const wantToExit = confirm("Quer sair da conta? 'Ok' para sair e 'cancelar', caso queira continuar logado.")
  if (wantToExit) {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    
    window.location.href = '../Account/index.html';
  }
})
ai.addEventListener("click", () => {aiPrompt(aiSubtitle)});
slideShow(homeSlider, ["../../../public/assets/images/Home-image.png", "../../../public/assets/images/About-image.png"]); // activate slide show
