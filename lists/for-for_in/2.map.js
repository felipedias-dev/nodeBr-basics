const service = require('./service');

async function main() {
  try {
    const result = await service.obterPessoas('a');
    const names = [];
    console.time('forEach');
    result.results.forEach(function(item) {
      names.push(item.name);
    });
    console.timeEnd('forEach');

    console.time('map');
    const names2 = result.results.map(pessoa => pessoa.name);
    console.timeEnd('map');
    console.log(names);
    console.log(names2);
  } catch (error) {
    console.error('Deu Ruim:', error);
  }
}

main();
