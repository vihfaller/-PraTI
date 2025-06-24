function palavrasUnicas(texto) {
  const palavras = texto.split(" ");
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];
    let repetida = false;

    for (let j = 0; j < palavras.length; j++) {
      if (i !== j && palavra === palavras[j]) {
        repetida = true;
        break;
      }
    }

    if (!repetida) {
      unicas.push(palavra);
    }
  }

  return unicas;
}


const entrada = "olá mundo, é a Vitoria Faller falando";
const resultado = palavrasUnicas(entrada);
console.log(resultado);
