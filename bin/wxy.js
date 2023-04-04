#! /usr/bin/env node

import { program } from 'commander';
import download from 'download-git-repo';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const json = require('../package.json')
program.version(json.version, '-v, --version')
    .command('init <templateName> <projectName>')
    .action((templateName, projectName) => {
        if (templateName === "vue2") {
            console.log('clone template ...');
            download('direct:http://gitlab.ifyou.net/rd/web/operation_project/group_zhanshuo/pure_antd_admin.git', projectName, function (err) {
                console.log(err ? 'Error' : 'Success')
            })
        } else if(templateName === "vue3") {
            console.log('clone template ...');
            download('direct:http://gitlab.ifyou.net/rd/web/operation_project/group_yajing/include-pure-vue3-cli.git#develop', projectName, function (err) {
                console.log(err ? 'Error' : 'Success')
            })
        } else {
          console.error('A template name that does not exist')
        }
    });
program.parse(process.argv);