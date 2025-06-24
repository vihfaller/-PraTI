const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let acertou = false;

while (!acertou) {
  const palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
  tentativas++;

  if (isNaN(palpite)) {
    alert("Por favor, digite um número válido.");
  } else if (palpite < numeroSecreto) {
    alert("Mais alto!");
  } else if (palpite > numeroSecreto) {
    alert("Mais baixo!");
  } else {
    alert(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
    acertou = true;
  }
}
