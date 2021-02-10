const _ = {
    clamp(number, lower, upper){
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    
    inRange(number, start, end){
      if(start > end){
        const temp = end;
        end = start;
        start = temp;
      }
      if(typeof end === 'undefined'){
        end = start;
        start = 0;
      }
      let isInRange;
      if(start <= number && number < end){
        isInRange = true;
      }
      else{
        isInRange = false;
      }
      return isInRange;
    },
  
    words(string){
      return string.split(' ');
    },
  
    pad(string, len){
      let beg;
      let end;
      let padString;
      if(len <= string.length){
        return string;
      }
      beg = Math.floor((len - string.length) / 2);
      end = len - string.length - beg;
      padString = ' '.repeat(beg) + string + ' '.repeat(end);
      return padString;
    },
  
    has(obj, key){
      if(typeof obj.key === 'undefined' || typeof obj[key] === 'undefined'){
        return false;
      }
      else{
        return true;
      }
    },
  
    invert(object){
      let inObj = {};
      for(const key in object){
       const originalValue = object[key];
        inObj = {originalValue: key};
      }
    return inObj;
    },
  
    findKey(object, predicate){
      for(const key in object){
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if(predicateReturnValue){
          return key;
        }
      }
      return undefined;
    },
  
    drop(arr, number = 1){
      let newArr = arr.slice(number);
      return newArr;
    },
  
    dropWhile(arr, predicate){
      const dropNumber = arr.findIndex((element, index) =>{
        return !predicate(element, index, arr);
      });
      const droppedArray = this.drop(arr, dropNumber);
      return droppedArray;
    },
  
    chunk(arr, size = 1){
      let newArr = [];
      for(let i = 0; i < arr.length; i+=size){
        newArr.push(arr.slice(i,i+size));
      }
      return newArr;
    }
  };