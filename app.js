const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PdfWriter = require("./PdfWriter");

const leitor = new Reader();
const escritor = new Writer();

async function main() {
  const dados = await leitor.read("./users.csv");
  const dataProcess = Processor.Process(dados);
  const table = new Table(dataProcess);
  console.log(table.RowCount);
  console.log(table.ColumnCount);
  const html = await HtmlParser.Parse(table);
  console.log(html);

  escritor.writer(`${Date.now()}.html`, html);

  PdfWriter.WritePdf(`${Date.now()}.pdf`, html);
}

main();
