export const showTable = (jsonConfig = [], format = true) => {
  if(format){
    let list = [];
    for (const key in jsonConfig) {
      list.push({
        name: key,
        url: jsonConfig[key],
      });
    }
    console.table(list, ['name', 'url']);
  }else{
    console.table(jsonConfig);
  }
};
