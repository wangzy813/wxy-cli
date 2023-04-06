#!/usr/bin/env node

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { showTable } from '../utils/utils.js'
const templateList = require('../template.json')

showTable(templateList)