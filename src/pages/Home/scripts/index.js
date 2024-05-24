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



ai.addEventListener("click", () => {aiPrompt(aiSubtitle)});