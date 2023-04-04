#!/usr/bin/env node

import { program } from 'commander'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

program.usage('<command>')

program.version(require('../package').version)

program
  .command('add')
  .description('add a new template')
  .action(() => {
    import('../commands/add.js')
  })

program
  .command('delete')
  .description('delete a template')
  .action(() => {
    import('../commands/delete.js')
  })

program
  .command('list')
  .description('List the templateList')
  .action(() => {
    import('../commands/list.js')
  })

program
  .command('create')
  .description('create a project')
  .action(() => {
    import('../commands/create.js')
  })

program.parse(process.argv)