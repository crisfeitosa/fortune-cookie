const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo')
const btnCookie = document.querySelector('.btnCookie')
const btnReset = document.querySelector('.btnReset')
const phraseOpenedCookie = document.querySelector('.phraseOpenedCookie')

const phrasesList = [
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "O tempo é o melhor autor: sempre encontra o final perfeito.",
  "Grandes conquistas começam com pequenos passos.",
  "A sorte favorece a mente preparada.",
  "Seja a mudança que você deseja ver no mundo.",
  "A sabedoria mora no silêncio que ouve mais do que fala.",
  "A estrada do sucesso está sempre em construção.",
  "A luz que você procura pode estar dentro de você.",
  "Cada novo dia é uma nova oportunidade de recomeçar.",
  "Quem planta gentileza, colhe gratidão.",
  "Não existe vento favorável para quem não sabe aonde vai.",
  "A persistência realiza o impossível.",
  "Os maiores tesouros são invisíveis aos olhos.",
  "A vida é feita de ciclos — aceite o fim para que o novo comece.",
  "Confie no processo, mesmo quando os resultados ainda não apareceram."
];

btnCookie.addEventListener('click', showPhraseOpenedCookie)
btnReset.addEventListener('click', handleToggle)

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && screenOne.classList.contains('hide') === false) {
    showPhraseOpenedCookie()
  }
})

function showPhraseOpenedCookie() {
  handleToggle()
  phraseOpenedCookie.innerText = phrasesList[Math.round(Math.random() * (phrasesList.length - 1))]
  console.log(phraseOpenedCookie.innerText)
}

function handleToggle() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}
