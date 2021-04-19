const quickSort = array => {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];
    for (let i = 0; i < array.length - 1; i++) {
        array[i] < pivot ? leftArr.push(array[i]) : rightArr.push(array[i]);
    }

    if(leftArr.length > 0 && rightArr.length > 0){
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    } else if(leftArr.length > 0) {
        return [...quickSort(leftArr), pivot];
    } else {
        return [pivot, ...quickSort(rightArr)];
    }
}

const arr = [1, 4, 2, 8, 245, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

console.log(quickSort(arr));