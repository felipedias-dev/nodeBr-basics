const { obterPessoas } = require('./service');

Array.prototype.meuReduce = function(callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];
  for (let index = 0; index < this.length; index++) {
    valorFinal = callback(valorFinal, this[index]);
  }
  return valorFinal;
};

async function main() {
  try {
    const { results } = await obterPessoas('a');
    const alturas = results.map(item => parseInt(item.height));
    console.log('Alturas:', alturas);

    // const total = alturas.reduce((anterior, proximo) => {
    //   return anterior + proximo;
    // }, 0);
    // console.log('Total:', total);
    const minhaLista = [
      ['Erick', 'Wendel'],
      ['NodeBR', 'Nerdzao'],
    ];
    const total = minhaLista
      .meuReduce((anterior, proximo) => {
        return anterior.concat(proximo);
      }, [])
      .join(', ');
    console.log('Total:', total);
  } catch (error) {
    console.error('Deu Ruim:', error);
  }
}

main();
