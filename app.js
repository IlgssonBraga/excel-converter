const Reader = require("./Reader");

const leitor = new Reader();

async function main() {
  const dados = await leitor.read("./users.csv");

  console.log(dados);
}

main();
