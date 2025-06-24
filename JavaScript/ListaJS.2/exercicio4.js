function fatorial(n) {
  if (n < 0) {
    throw new Error("Fatorial não definido para n < 0");
  }
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}


console.log(fatorial(5));
