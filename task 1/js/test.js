

function almostIncreasingSequence(arr) {
  let acc = 0;
  let badElem = 0;
  let array = [];
  array = arr.concat();
  let double = [];
  
  // [1, 2, 5, 3, 5]

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] === array[i + 1] && array[i] > array[i + 1]) {
      acc += 1;
      console.log('step - ' + i + ' deleting - ' + array[i + 1]);
      array.splice(i + 1, 1);
    }
    if (array[i - 1] < array[i + 1] && array[i] > array[i + 1]) {
      acc += 1;
      console.log('step - ' + i + ' deleting - ' + array[i]);
      array.splice(i, 1);
    }
    if (acc > 1) {
      return false;
    }
  }


  for (let j = 0; j <= array.length; j++) {
    let elem = array[j];
    let position = array.indexOf(elem);

    while (position != -1) {
      double.push(position);
      position = array.indexOf(elem, position + 1); // Массив номеров позиций двойников
    }

    if (double.length < 2) {      // чистить массив двойников, если там 1 элемент
      double.length = 0;
    }
    if (double.length === 2) {      // удалить второго двойника из оригинала, если он один.
      acc += 1;
      array.splice(double[1], 1);
      double.length = 0;
    }
    if (double.length > 2 ) {    // зрада, если двойников больше 1-го.
      return false;
    }
    if (acc > 1) {   // зрада, если было два удаления разных двоников
      return false;
    }
  }

console.log(array);

  for (let i = 0; i <= 1; i++) {

    for (let k = 0; k <= array.length - 2; k++) {
      if (array[k] < array[k + 1]) continue;            // если всё по порядку - тру
        acc += 1;
        array.splice(array.indexOf(array[k]), 1);      // если нет, то удалить эл-т, который
      if (acc > 1) {                                // который больше следующего
        return false;
      }
    }
  }



  return true;
}

console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));
