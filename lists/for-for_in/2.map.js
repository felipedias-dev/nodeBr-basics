const service = require('./service');

Array.prototype.meuMap = function(callback) {
  const novoArrayMapeado = [];
  for (let indice = 0; indice < this.length; indice++) {
    const resultado = callback(this[indice], indice);
    novoArrayMapeado.push(resultado);
  }

  return novoArrayMapeado;
};

async function main() {
  try {
    const result = await service.obterPessoas('a');
    // const names = [];
    // console.time('forEach');
    // result.results.forEach(function(item) {
    //   names.push(item.name);
    // });
    // console.timeEnd('forEach');

    // console.time('map');
    // const names2 = result.results.map(pessoa => pessoa.name);
    // console.timeEnd('map');
    // console.log(names);
    // console.log(names2);

    const names = result.results.meuMap(
      (pessoa, indice) => `[${indice}] ${pessoa.name}`
    );
    console.log(names);
  } catch (error) {
    console.error('Deu Ruim:', error);
  }
}

main();
