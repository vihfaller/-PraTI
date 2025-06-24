function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice() // evita mutação, aprendi no meu outro curso
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 300 }
];
console.log(nomesOrdenadosPorPreco(produtos));