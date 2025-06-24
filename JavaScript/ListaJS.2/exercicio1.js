function ehBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function ehDataValida(dia, mes, ano) {
  if (mes < 1 || mes > 12 || dia < 1) {
    return false;
  }

  const diasPorMes = [31, (ehBissexto(ano) ? 29 : 28), 31, 30, 31, 30,
                      31, 31, 30, 31, 30, 31];

  return dia <= diasPorMes[mes - 1];
}


console.log(ehDataValida(29, 2, 2024));
console.log(ehDataValida(29, 2, 2023));
console.log(ehDataValida(31, 4, 2022));
console.log(ehDataValida(31, 12, 2022));
