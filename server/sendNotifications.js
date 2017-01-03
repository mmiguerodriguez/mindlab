import * as fs from 'fs';
import { readSettings } from './readSetings.js';

fs.readFile('../users.json', (error, data) => {
  if (error) {
    console.log(error);
  }

  let settings;
  readSettings((data) => {
    settings = data;
  }, (error) => {
    console.log(error);
  });

  const users = JSON.stringify(data);
  users.forEach((user) => {
    fetch();
  });
});