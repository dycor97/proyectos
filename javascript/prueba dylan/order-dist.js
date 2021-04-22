// dado un diccionario, crear una funcion que te regrese un arreglo con las
// las llaves en order por el valor de su contenido

const test_data = {
    "a": 4000,
    "c": 44,
    "efe": "EFE",
    "be": 1,
    "zeta": 32
  }
  
  // return and array of dict keys in ascending order
  function orderDictKeys(data) {
      let orderValues = bubbleSort(Object.values(test_data));
      let keys = Object.keys(data)
      let newkeys = [];
  
      console.log(orderValues);
      for(let i = 0; i < orderValues.length; i++) {
          for(let j = 0; j < orderValues.length; j++){
              let key = keys[j];
              if(test_data[key] === orderValues[i]){
                  newkeys.push(key);
              }
          }
      }
     return newkeys;
  }
  
  const bubbleSort = array => {
      for(let i = 0; i < array.length - 1; i++) {
          for(let j = 0; j < array.length - 1 - i; j++) {
              if(array[j] > array[j + 1] || typeof array[j] === 'string') {
                  let temp = array[j];
                  array[j] = array[j + 1];
                  array[j + 1] = temp;
              }
          }
      }
      
      return array;
    }
orderDictKeys(test_data);