const fs = require("fs");

class Reader {
  read(filepath) {
    fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
}

module.exports = Reader;
