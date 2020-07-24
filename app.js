const Reader = require("./Reader");
const Processor = require("./Processor");

const leitor = new Reader();

async function main() {
  const dados = await leitor.read("./users.csv");
  const dataProcess = Processor.Process(dados);
  console.log(dataProcess);
}

main();
