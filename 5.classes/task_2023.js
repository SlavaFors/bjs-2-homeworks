/*Задача 1. Печатное издание
Задача продолжает идеи, заложенные в предыдущем ДЗ, но уже с использованием всех возможностей классов.

Нужно помочь перевести небольшую районную библиотеку в современный цифровой формат. Начнём с реализации нескольких классов:

классы печатных изданий — книг, журналов;
класс библиотеки, который позволит работать с печатными изданиями: хранить их, выдавать читателям, принимать обратно.
Что нужно сделать
Печатные издания бывают разных видов, но между всеми книгами, сборниками и журналами есть много общего: у всех них есть название, год издания, страницы, они могут повреждаться с процессе использования.

1) Создайте базовый класс PrintEditionItem со свойствами:
name;
releaseDate;
pagesCount;
state;
type.
Конструктор класса должен принимать название (name), дату выпуска (releaseDate) и количество страниц (pagesCount) в качестве аргумента. Состояние (state) по умолчанию должно быть 100, тип type пока должен быть равен null.

2) Испорченное издание можно подклеить и улучшить его состояние. Создайте метод fix(), увеличивающий state в полтора раза. Метод не должен принимать аргументы.

3) Нельзя улучшить новое издание, также бесполезно подклеивать полностью уничтоженное. Чтобы лучше контролировать состояние книг, создайте «сеттер» для свойства state, принимающий в качестве аргумента новое состояние печатного издания (число).

Если новое состояние меньше 0, «сеттер» должен записать в свойство state значение 0. Если новое состояние больше 100, должно быть записано значение 100. В остальных случаях в свойство state должно быть записано переданное в «сеттер» значение.

4) Создайте «геттер», который позволит читать значение свойства state.

Пример использования

const sherlock = new PrintEditionItem(
 "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
 2019,
 1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

5) Создайте класс Magazine, который будет наследоваться от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель. От базового печатного издания журнал отличается только указанным типом. Значение свойства type должно быть равно "magazine".

6) Создайте класс Book, который наследуется от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель, и имя автора книги author. Значение свойства type должно быть равно "book".

7) Создайте классы, которые наследуются от класса Book: NovelBook — для романов, FantasticBook — для фантастических произведений и DetectiveBook — для детективов. Значения свойства type должны быть равны "novel", "fantastic" и "detective" соответственно.

Пример использования

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15*/


class PrintEditionItem {
  constructor(name, releaseDate, pagesCount){ 
//Конструктор класса должен принимать название (name), дату выпуска (releaseDate) и количество страниц (pagesCount) в качестве аргумента
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null
  }

  fix() {
    this.state = this.state * 1.5;
  }
  set state (newState) {
     if (newState < 0) {
       this._state = 0;
     }
     if (newState > 100) {
       this._state = 100;
     } else 
       this._state = newState;
  }
  get state () {
    return this._state;
  }
}

const sherlock = new PrintEditionItem(
 "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
 2019,
 1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount){ 
    super(name, releaseDate, pagesCount);
    this.state = 100;
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount){ 
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.state = 100;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount){ 
    super(name, releaseDate, pagesCount, author);
    this.author = author;
    this.state = 100;
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount){ 
    super(name, releaseDate, pagesCount, author);
    this.author = author;
    this.state = 100;
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount){ 
    super(name, releaseDate, pagesCount, author);
    this.author = author;
    this.state = 100;
    this.type = "detective";
  }
}

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15*/

