/*
0 - Obter um usuário
1 - Obter o telefone de um usuário a partir de seu id
2 - Obter o endereço do usuário pelo id
*/

const { promisify } = require("util");
const getAddressAsync = promisify(getAddress);

function getUser() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      // return reject(new Error("Barril!"));
      return resolve({
        id: 1,
        name: "Aladin",
        birth: new Date()
      });
    }, 1000);
  });
}

function getTelephone(userId) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      return resolve({
        tel: 996176784,
        ddd: 84
      });
    }, 2000);
  });
}

function getAddress(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "rua dos bobos",
      numero: 0
    });
  }, 2000);
}

main();

async function main() {
  try {
    console.time("medida-promise");
    const user = await getUser();
    // const tel = await getTelephone(user.id);
    // const address = await getAddressAsync(user.id);
    const result = await Promise.all([
      getTelephone(user.id),
      getAddressAsync(user.id)
    ]);

    const tel = result[0];
    const address = result[1];

    console.log(`
    User: ${user.name}
    Tel: ${tel.tel}
    Address: ${address.rua}`);
    console.timeEnd("medida-promise");
  } catch (error) {
    console.log("Deu ruim!", error);
  }
}

/* const userPromise = getUser();
userPromise
  .then(function(user) {
    return getTelephone(user.id).then(function resolveTel(result) {
      return {
        user: {
          name: user.name,
          id: user.id
        },
        telephone: result
      };
    });
  })
  .then(function(result) {
    const address = getAddressAsync(result.user.id);
    return address.then(function resolveAddress(received) {
      return {
        user: result.user,
        telephone: result.telephone,
        address: received
      };
    });
  })
  .then(function(result) {
    console.log("Resultado", result);
  })
  .catch(function(error) {
    console.error("Deu ruim", error);
  });
 */
/* getUser(function resolveUser(err, user) {
  if (err) {
    return console.log("Deu ruim no user!");
  }

  getAddress(user.id, function resolveAddress(err1, address) {
    if (err1) {
      return console.log("Deu ruim no addres!");
    }

    getTelephone(user.id, function resolveTelephone(err2, tel) {
      if (err2) {
        return console.log("Deu ruim no telephone!");
      }

      console.log(`
        Name: ${user.name}
        Address: ${address.rua}, ${address.numero}
        Telephone: (${tel.ddd}) ${tel.tel}`);
    });
  });
}); */
// const tel = getTelephone(user.id);
// const address = getAddress(user.id);

// console.log("Telephone", tel);
// console.log("Address", address);
