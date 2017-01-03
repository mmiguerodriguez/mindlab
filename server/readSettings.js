import * as fs from 'fs';

const readSettings = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('../settings.json', (error, data) => {
      if (error) {
        reject(error);
      }
  
      const json = JSON.stringify(data);
      resolve(json);
    });
  });
};

export default readSettings;
