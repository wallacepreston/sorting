function bubbleSort(arr){
  let sortCounter=0;
  //let sortedArr=[];
  for (let i = 0; i < arr.length; i++){
    for (let j = i+1; j < arr.length; j++){
      //comparing i to j,
      let diff = arr[i] - arr[j];
      //if diff is positive it means i is larger that j, so swap.
      if (diff > 0){
        
        swap(arr, j, i);
      }
    }
  }
  return arr;
}

//this is a basic swap function
function swap(arr,j, i){
let temp=arr[i];
arr[i] = arr[j];
arr[j] = temp;
}

let newArr = [3,4,2,1,9];

console.log(bubbleSort(newArr));
