import chalk from 'chalk';
export const showTable = (jsonConfig = {}, format = true) => {
  if(format){
    if(checkNullObj(jsonConfig)){
      console.log(chalk.red("Template is empty, Please use the 'wxy add' command to add a template."))
      return
    } 
    let list = [];
    for (const key in jsonConfig) {
      const url = jsonConfig[key].split('#')[0]
      const branch = jsonConfig[key].split('#')[1]
      list.push({
        name: key,
        url,
        branch
      });
    }
    console.table(list, ['name', 'url', 'branch']);
  }else{
    console.table(jsonConfig);
  }
};

export const checkNullObj = (obj = {}) => {
  return JSON.stringify(obj) === "{}"
}
