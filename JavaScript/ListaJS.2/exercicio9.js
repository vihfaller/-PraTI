function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i];
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  const pares = [];
  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}

const pares = [["a", 1], ["b", 2]];
const obj = { a: 1, b: 2 };

console.log(paresParaObjeto(pares));
console.log(objetoParaPares(obj));