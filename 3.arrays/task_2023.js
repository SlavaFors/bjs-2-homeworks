/*Задача 1. Сравнить массивы
Создайте функцию compareArrays(arr1, arr2), которая с помощью функции высшего порядка будет сравнивать значения двух массивов. Если массивы имеют одинаковые значения на одинаковых индексах, compareArrays должна выдавать true (иначе false). Используйте метод every для сравнения элементов одного массива с соответствующими элементами другого массива.
*/

function compareArrays(arr1, arr2) {
  let result;
    result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
    return result;
}

compareArrays([8, 9], [6]) // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]) // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]) // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]) // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]) // true



/*Задача 2. Фильтрация и преобразование массива
Создайте функцию getUsersNamesInAgeRange(users, gender), которая возвращает среднее значение возраста пользователей одного пола.

Используйте метод filter для получения нужных пользователей.
Используйте метод map для получения их возрастов, или сразу формируйте среднее значение в reduce.
Используйте метод reduce для формирования среднего значения возраста.
let result = arr.filter(...).map(...).reduce(...)*/

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(user => user.gender === gender).map(item => item.age).reduce((acc, item, index, arr) => {
    acc += item; //все значение возрастов
    if (index === arr.length-1) {
      return acc / arr.length; //среднее значение
    }
    return acc;
  }, 0);
  return result;
}

const people = [
  {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
  {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
  {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
  {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
  {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
  {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
  {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
  {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
  {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
  {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
  {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
  {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
  {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
  {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
]
console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
console.log(getUsersNamesInAgeRange([], "женский")); // 0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0
