function agruparPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    if (!acc[venda.cliente]) {
      acc[venda.cliente] = 0;
    }
    acc[venda.cliente] += venda.total;
    return acc;
  }, {});
}

const vendas = [
  { cliente: "João", total: 100 },
  { cliente: "Maria", total: 150 },
  { cliente: "João", total: 50 }
];
console.log(agruparPorCliente(vendas));