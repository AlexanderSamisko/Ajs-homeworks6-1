export default function orderobjectproperties(obj, orderArray) {
  // Первый вариант! Без выброса ошибки.

  // let pairs = Object.entries(object);
  // let properOrder = [];
  // for (let i = 0; i < orderArray.length; i += 1){
  //     for (let j = 0; j < pairs.length; j += 1){
  //         if(pairs[j][0] === orderArray[i]){
  //             properOrder.push(
  //                 {
  //                     key: pairs[j][0],
  //                     value: pairs[j][1]
  //                  } );
  //             pairs.splice(j,1);
  //         }
  //     };
  // };
  // pairs.sort((a,b)=> {
  //     return a[0].toLowerCase().localeCompare(b[0].toLowerCase())
  // });
  // for (let k = 0; k < pairs.length; k += 1) {
  //     properOrder.push({
  //         key: pairs[k][0],
  //         value: pairs[k][1]
  //      });
  // };
  // return properOrder

  // Второй вариант! С выбросом ошибки

  const internalObj = { ...obj }; // ввел потому что линт ругается на 41ю строку, при оригинальном переданном обьекте. 
                                  // думал попробовать с прокси, но запутался. 
  const properOrder = [];
  for (let i = 0; i < orderArray.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(internalObj, orderArray[i])) {
      properOrder.push(
        {
          key: orderArray[i],
          value: internalObj[`${orderArray[i]}`],
        },
      );
      delete internalObj[`${orderArray[i]}`];
    } else {
      throw new Error('В объекте нет крайней мере одного из искомых свойств!');
    }
  }

  const pairs = Object.entries(internalObj);
  pairs.sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()));

  for (let k = 0; k < pairs.length; k += 1) {
    properOrder.push({
      key: pairs[k][0],
      value: pairs[k][1],
    });
  }

  return properOrder;
}
