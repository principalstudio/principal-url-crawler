const save = (data, path, transformToJson = true) => {
  return new Promise((resolve, reject) => {
    const fs = require('fs');
    let json;
    if (transformToJson) {
      json = JSON.stringify(data);
    } else {
      json = data;
    }

    fs.writeFile(path, json, function(err) {
      if (err) {
        reject(false);
      }
      resolve(true);
    });
  });
};

module.exports = save;
