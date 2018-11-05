function split (wholeArray){
  let splitVal = Math.ceil(wholeArray.length/2);
  let firstHalf=wholeArray.slice(0, splitVal);
  let secondHalf = wholeArray.slice(splitVal);
  return [firstHalf,secondHalf];
}

console.log(split([3,4,5,6,9,8,6]));

function merge (sortedArray1, sortedArray2){
  let mergedArray=[];
  while (sortedArray1.length){
  if (sortedArray1[0] < sortedArray2[0]){
    mergedArray.push(sortedArray1.unshift());
  } else {
      if(sortedArray2.length){
      mergedArray.push(sortedArray2.unshift());
      }
  }
}
  return mergedArray;
}