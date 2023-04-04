#!/usr/bin/env node

import { program } from 'commander';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import ora from 'ora';
import download from 'download-git-repo';
const templateList = require('../template.json');
import symbols from 'log-symbols';
import chalk from 'chalk';
chalk.level = 1;

program.usage('<template-name> [project-name]');
program.parse(process.argv);
// 当没有输入参数的时候给个提示
(function () {
  if (program.args.length < 1) return program.help();
})();

// 第一个参数是 webpack，第二个参数是 project-name
let templateName = program.args[1];
let projectName = program.args[2];

console.log(templateName, projectName);

(function () {
  if (!templateList[templateName]) {
    console.log(chalk.red('\n Template does not exit! \n '));
    return;
  }
  if (!projectName) {
    console.log(chalk.red('\n Project should not be empty! \n '));
    return;
  }
})();

let url = templateList[templateName];
console.log(url);

console.log(chalk.green('\n Start generating... \n'));
// 出现加载图标
const spinner = ora('Downloading...');
spinner.start();

download(`direct:${url}`, `./${projectName}`, { clone: true }, (err) => {
  if (err) {
    spinner.fail();
    console.log(
      chalk.red(symbols.error),
      chalk.red(`Generation failed. ${err}`)
    );
    return;
  }
  // 结束加载图标
  spinner.succeed();
  console.log(
    chalk.green(symbols.success),
    chalk.green('Generation completed!')
  );
  console.log('\n To get started');
  console.log(`\n    cd ${projectName} \n`);
});
