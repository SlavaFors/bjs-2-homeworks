// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = 100;
  max = -100;
  sum = 0;
 
    for (let i = 0; i < arr.length; i += 1){
      if (arr[i] < min) {
        min = arr[i];
      } 

      if (arr[i] > max) {
        max = arr[i];
      } 

    sum += arr[i];
  
    avg = +((sum / Number(arr.length)).toFixed(2));
  } 

  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {  //worker(arr) - это насадка
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) { //makeWork(arrOfArr,func) - это мясорубка
  let max = 0;
   
    for (let i = 0; i < arrOfArr.length; i += 1) {
      func(arrOfArr[i]);

          if (func(arrOfArr[i]) > max) {
            max = func(arrOfArr[i]);
          }
  }
  return max;
}



// Задание 3
function worker2(arr) {
 let max, min, diff;
 min = Infinity;
 max = -Infinity;
  
  for (let i = 0; i < arr.length; i+=1) {
    if (arr[i] < min) {
      min = arr[i];
    }
    
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return diff = Math.abs(max - min);

}

//Попробуем реализовать другую насадку для нашей мясорубки. Для этого напишем функцию `worker2` которая 
//должна находить разность максимального и минимального значения внутри массива. Это можно интерпретировать 
//как расстояние между минимумом и максимумом. Заметьте, что данная разность - всегда неотрицательное число 
//(используйте `Math.abs()` для вычисления модуля числа). Затем используйте данную насадку как аргумент для 
//функции makeWork.

