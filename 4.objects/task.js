function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
 }

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;  
}
/*2) Создайте доступный для всех экземпляров student метод setSubject(subjectName), который при вызове будет устанавливать поле предмет 
subject экземпляра в subjectName. Для этого добавьте в свойство Student.prototype функции конструктора функцию setSubject.*/

Student.prototype.addMark = function (mark) {
	if(this.marks === undefined){ 
	 	this.marks = [mark];
	} else {
	    this.marks.push(mark);
	}
}
/*3) Создайте метод addMark(mark) по аналогии с п.2, который при вызове будет добавлять студенту оценку mark в свойство (массив) marks 
объекта. Обратите внимание, что ранее мы нигде не задавали свойство marks для инстансов(экземпляров). Значит нам надо проверять, 
что свойство существует.*/

Student.prototype.addMarks = function (...marks) {
	if(this.marks === undefined){ 
	 	this.marks = [...marks];
	} else {
	    this.marks.push(...marks);
}
/*4) Создайте метод addMarks(mark1,mark2,mark3...) по аналогии с п.2, который при вызове будет добавлять студенту сразу несколько оценок. 
Подсказка: так как количество добавляемых оценок неизвестно, воспользуйтесь rest параметром.*/

Student.prototype.getAverage = function () {
	sum = this.marks.reduce((acc, mark) => acc + mark, 0);
	return sum / this.marks.length;
	}
}
/*5) Создайте метод getAverage() по аналогии с п.2, который при вызове будет возвращать среднее арифметическое оценок студента.*/

Student.prototype.exclude = function (reason) {
  	if (this.excluded !== undefined) {
	    delete this.subject;
	    delete this.marks;
  }
  this.excluded = reason;
}

/*6) Создайте метод exclude(reason) по аналогии с п.2, который при вызове будет исключать студента из учебного процесса и устанавливать 
причину исключения. Для этого надо удалить свойства subject и marks и добавить свойство excluded со значением reason.*/