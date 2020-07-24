const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");

const leitor = new Reader();

async function main() {
  const dados = await leitor.read("./users.csv");
  const dataProcess = Processor.Process(dados);
  const table = new Table(dataProcess);
  console.log(table.RowCount);
  console.log(table.ColumnCount);
}

main();
