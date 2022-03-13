// Remove a specific Element from an array
var arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
function suppression(arr, n) {
  for (var i = 0; i <= arr.length; i++) {
    var j;
    if (arr[i] == n) {
      for (j = i; j <= arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
    }
  }
  arr.length = arr.length - 1;
}

suppression(arr, 3);
console.log(arr);

//Remove Duplicates from Sorted Array
var arr2 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
function SupDup(arr) {
  var i;
  for (i = 0; i <= arr.length; i++) {
 
      for (var j=i+1; j <= arr.length- 1; j++) {
      if (arr[i] === arr[j]) {
        suppression(arr, arr[j]);
      }
    }
  }
}

SupDup(arr2);
console.log(arr2);