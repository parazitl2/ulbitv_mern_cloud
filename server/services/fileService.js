const fs = require('fs');
const File = require('../models/File');
const config = require('config');

class FileService {
  createDirectory(file) {
    const filePath = `${config.get('filePath')}/${file.user}/${file.path}`;

    return new Promise((resolve, reject) => {
      try {
        if(!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return resolve({ message: 'File was created' });
        } else {
          return reject({ mesage: 'File already exists' });
        }
      } catch (e) {
        return reject({ message: "file error", error: e });
      }
    });
  }
};

module.exports = new FileService();