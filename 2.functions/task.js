//Задача 1
function getArrayParams(...arr) {
let min, max, sum, avg;
  min = Infinity;
  max = -Infinity
  sum = 0;

  for (let i = 0; i < arr.length; i++){

    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];

    avg = +((sum / arr.length).toFixed(2));
    
  }
  return { min: min, max: max, avg: avg };
}



//Задача 2
/*
Что нужно сделать

5)Во всех функциях должна быть проверка наличия элементов. 
Если элементы не передавались в функцию, то нет смысла что-либо считать и можно сразу возвращать ноль.*/


//1) Напишите функцию summElementsWorker, которая должна находить сумму элементов массива и возвращать её. 
//Суммирование элементов можно реализовать аналогично первому заданию c помощью цикла или метода reduce.
function summElementsWorker(...arr) { //насадка суммирования элементов
  let sum=0;
    if (arr.length > 0){
      sum = [...arr].reduce((acc, item) => acc + item, 0);
    }
      return sum;
}
console.log(summElementsWorker());
console.log(summElementsWorker(10, 10, 11, 20, 10));


//2) Напишите функцию differenceMaxMinWorker для вычисления разницы максимального и минимального элементов.
//-C помощью цикла или методов Math.max и Math.min найдите максимальное и минимальное значения.
//-Возвращайте разницу этих значений.

function differenceMaxMinWorker(...arr) { //насадка вычисления разницы максимального и минимального элементов
  let difference = 0;
  if (arr.length > 0){
    for (let i=0; i < arr.length; i++){
      difference = Math.max.apply(null, arr) - Math.min.apply(null, arr);
    }  
  } return difference;
} 
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

//3) Напишите функцию differenceEvenOddWorker вычисления разницы сумм чётных и нечётных элементов.
//-Объявите две переменные, например, sumEvenElement и sumOddElement, в которых будут накапливаться
//чётные и нечётные элементы. Инициализируйте эти переменные начальными значениями — нулями.
//-Реализуйте цикл для перебора всех элементов массива.
//-При переборе каждый элемент проверяйте с помощью конструкции if / else.
//-Если элемент чётный, то увеличивайте одну переменную (sumEvenElement), а если нечётный, то другую (sumOddElement).
//-После выполнения цикла выполняйте возвращение разницы двух элементов.

function differenceEvenOddWorker(...arr) { //насадка вычисления разницы сумм чётных и нечётных элементов
let sumOdd = 0; //Odd (нечет) или Even (чёт)
let sumEven = 0; 
  if (arr.length > 0){
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEven += arr[i];
      } else {
        sumOdd += arr[i];
      }
    } 
    return sumEven - sumOdd;
  } else {
  return 0;
  }
}
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269


//4)Напишите функцию averageEvenElementsWorker, которая будет вычислять среднее значение чётных элементов.
//-Объявите две переменные, например, sumEvenElement и countEvenElement, в которых будут накапливаться сумма 
//чётных элементов и их количество. Инициализируйте эти переменные начальными значениями — нулями.
//-Реализуйте цикл для перебора всех элементов массива.
//-При переборе каждый элемент проверяйте с помощью конструкции if.
//-Если элемент чётный, то увеличивайте одну переменную (sumEvenElement) на перебираемый элемент, 
//а другую переменную (countEvenElement) — на единицу.
//-После выполнения цикла выполняйте возвращение результата деления суммы элементов на их количество.

function averageEvenElementsWorker(...arr) { //насадка вычисления среднего значения чётных элементов
let sumEvenElement = 0;
let countEvenElement = 0;
let result;
  if (arr.length > 0){
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      } 
    } 
    return result = sumEvenElement / countEvenElement;
  } return result = 0;
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38




/*В предыдущем задании вам нужно было написать насадки к мясорубке — преобразователи данных. Теперь необходимо написать саму функцию мясорубки — агрегатор преобразований.

Напишите функцию makeWork, которая из массива данных и насадки будет возвращать максимальный результат функции насадки.

Функция makeWork принимает два аргумента: arrOfArr и func. В первом аргументе передаётся массив, 
элементы которого — массивы с данными, которые будут передаваться в функцию-насадку. 
Вторым аргументом передаётся одна из функций насадок.
Инициализируйте переменную (maxWorkerResult), в которой будет формироваться максимальный результат, и инициализуйте её начальным значением.
 Можно использовать самое минимальное числовое значение -Infinity, либо использовать результат насадки 
 от самого первого элемента из полученных данных (на позиции ноль массива arrOfArr). Используйте spread-оператор 
 для разделения массива элементов на отдельные элементы.
Реализуйте цикл для перебора всех элементов массива arrOfArr.
Внутри цикла каждый перебираемый элемент передавайте в функцию-насадку. Используйте spread-оператор для 
разделения массива элементов на отдельные элементы. Результат функции сохраните в отдельную константу.
Добавьте проверку: полученное значение больше переменной, в которой формируется максимальное значение?
Если полученное значение больше переменной с максимумом, то переприсваивайте переменную максимума на полученное значение.
После выполнение цикла в переменной максимума должно быть максимальное значение результатов насадки. 
Эту переменную следует возвращать из функции.
Пример
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
*/
//Задача 3


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const resultFunc = func(...arrOfArr[i]);
    if (resultFunc > maxWorkerResult) {
      maxWorkerResult = resultFunc;
    }
  }
  return maxWorkerResult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72