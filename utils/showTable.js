export const showTable = (jsonConfig = [], format = true) => {
  if(format){
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
