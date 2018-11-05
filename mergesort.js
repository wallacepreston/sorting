function split (wholeArray){
  let splitVal = Math.ceil(wholeArray.length/2);
  let firstHalf=wholeArray.slice(0, splitVal);
  let secondHalf = wholeArray.slice(splitVal);
  return [firstHalf,secondHalf];
}



function merge (arr){
  let sortedArray1 = arr[0];
  let sortedArray2 = arr[1];
  let mergedArray=[];
  while (sortedArray1.length && sortedArray2.length){
    if (sortedArray1[0] < sortedArray2[0]){
      mergedArray.push(sortedArray1.shift());
    } else {
        if(sortedArray2.length){
          mergedArray.push(sortedArray2.shift());
        }
    }
  }
  if(sortedArray1.length){
    mergedArray.push(...sortedArray1)
  } else if (sortedArray2.length){
    mergedArray.push(...sortedArray2)
  }

  return mergedArray;
}

function mergeSort(array) {
  if (array.length === 1){
    return array;
  } else {
      merge(split(array));
  }
 }
 console.log(mergeSort([5,2]));
 
 
