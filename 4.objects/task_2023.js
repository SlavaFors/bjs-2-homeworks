/*Задача 1. Инкапсуляция студента
Мы хотим инкапсулировать логику работы со студентами в объекты так, чтобы могли создавать студентов, 
устанавливать им предмет, добавлять оценки, считать средний балл и отчислять.
Что нужно сделать
1) Создайте функцию-конструктор Student(name, gender, age) и с помощью оператора new несколько экземпляров объектов (студентов).
 Все аргументы функции-конструктора сохраните в соответствующие свойства и добавьте свойство marks со значением пустого массива. 
 Позже в этот массив будут добавляться оценки.
2) Создайте доступный для всех экземпляров student метод setSubject(subjectName), который при вызове будет устанавливать поле 
предмет subject экземпляра в subjectName. Для этого добавьте в свойство Student.prototype функции-конструктора функцию setSubject.
Student.prototype.setSubject = function (subjectName) {
  //ваш код
}
4) Создайте метод addMarks(...marksToAdd) по аналогии с п. 2, который при вызове будет добавлять студенту сразу несколько оценок. 
Перед добавлением оценок добавьте проверку существования свойства marks, в котором хранятся оценки. Если пользователь отчислен, 
то у него не будет массива оценок, а, значит, и добавление будет невозможным.
=Подсказка: так как количество добавляемых оценок неизвестно, используйте rest-параметр.

5) Создайте метод getAverage() по аналогии с п. 2, который при вызове будет возвращать среднее арифметическое оценок студента. 
Добавьте проверку наличия оценок у студента. Если свойства marks не существует или оно пустое, сразу возвращайте ноль.

6) Создайте метод exclude(reason) по аналогии с п. 2, который при вызове будет исключать студента из учебного процесса и устанавливать 
причину исключения. Для этого надо удалить свойства subject и marks и добавить свойство excluded со значением reason.*/



function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;  
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
    if (this.marks !== undefined) {
    this.marks.push(...marks);
  }
};



Student.prototype.getAverage = function () {
  let sum = 0;
  let count = 0;
  let result;
   if (this.marks !== undefined && this.marks.length > 0) {
     for (let mark of this.marks) {
          sum += mark;
          count += 1;
        }
        result = sum / count;
      } else {
        result = 0;
      }
      return result;
};

/*6) Создайте метод exclude(reason) по аналогии с п. 2, который при вызове будет исключать студента из учебного процесса и устанавливать 
причину исключения. Для этого надо удалить свойства subject и marks и добавить свойство excluded со значением reason*/

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}