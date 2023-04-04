#!/usr/bin/env node

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { program } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let templateList = require(`${__dirname}/../template.json`);
import { showTable } from '../utils/showTable.js';
import symbols from 'log-symbols';
import chalk from 'chalk';
chalk.level = 1;

program.usage('[project-name]');
program.parse(process.argv);
if (program.args.length < 2) {
  showTable(templateList);
  let question = [
    {
      name: 'name',
      message: '请输入要删除的模板名称',
      validate(val) {
        if (!val) {
          return 'Name is required!';
        } else if (!templateList[val]) {
          return 'Template does not exist!';
        } else {
          return true;
        }
      },
    },
  ];

  inquirer.prompt(question).then((answers) => {
    let { name } = answers;
    delete templateList[name];
    fs.writeFile(
      `${__dirname}/../template.json`,
      JSON.stringify(templateList),
      'utf-8',
      (err) => {
        if (err) console.log(chalk.red(symbols.error), chalk.red(err));
        console.log('\n');
        console.log(
          chalk.green(symbols.success),
          chalk.green('Deleted successfully!\n')
        );
        if(JSON.stringify(templateList)==="{}"){
          console.log(chalk.green('Cleared all templates\n'));
        }else{
          console.log(chalk.green('The latest templateList is: \n'));
          showTable(templateList);
        }
      }
    );
  });
} else if (program.args[1] === 'all') {
  templateList = {};
  fs.writeFile(
    `${__dirname}/../template.json`,
    JSON.stringify(templateList),
    'utf-8',
    (err) => {
      if (err) console.log(chalk.red(symbols.error), chalk.red(err));
      console.log('\n');
      console.log(
        chalk.green(symbols.success),
        chalk.green('Deleted successfully!\n')
      );
      console.log(chalk.green('Cleared all templates\n'));
    }
  );
} else {
  delete templateList[program.args[1]];
  fs.writeFile(
    `${__dirname}/../template.json`,
    JSON.stringify(templateList),
    'utf-8',
    (err) => {
      if (err) console.log(chalk.red(symbols.error), chalk.red(err));
      console.log('\n');
      console.log(
        chalk.green(symbols.success),
        chalk.green('Deleted successfully!\n')
      );
      if(JSON.stringify(templateList)==="{}"){
        console.log(chalk.green('Cleared all templates\n'));
      }else{
        console.log(chalk.green('The latest templateList is: \n'));
        showTable(templateList);
      }
    }
  );
}

