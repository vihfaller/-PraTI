function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const resultado = fn.apply(this, args);
    cache[key] = resultado;
    return resultado;
  };
}


const somar = (a, b) => a + b;
const somarMemo = memoize(somar);
console.log(somarMemo(2, 3));
console.log(somarMemo(2, 3));
