const ai = document.querySelector(".assistent__ai");
const aiSubtitle = document.querySelector(".assistent__subtitle");
const homeSlider = document.querySelector(".home__image.slider");

const aiPrompt = (element) => {
  const questionName = prompt("Olá, qual seu nome?");

  console.log(isNaN(questionName))
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

  console.log(element)

  element.textContent = `VoltAi, para que você (${questionName}) saiba mais sobre '${questionCar}'`;
};

const slideShow = (slider, imagesName, actualImage = 0, timeout = false) => {
  if (slider && imagesName) {
    if (timeout) {
      if (imagesName.length == actualImage) {
        actualImage = 0
      }

      slider.src = `../../../public/assets/images/${imagesName[actualImage]}`
    }
  }

  console.log(slider)

  setTimeout(() => {
    slideShow(slider, imagesName, (actualImage + 1), true);
  }, 3000)
}

ai.addEventListener("click", () => {aiPrompt(aiSubtitle)});
slideShow(homeSlider, ["Home-image.png", "About-image.png"]); // activate slide show