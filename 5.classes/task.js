/*Конструктор класса должен принимать: название (name), дату выпуска (releaseDate) и количество страниц (pagesCount) в качестве аргумента. 
Состояние (state) по умолчанию должно устанавливаться равным 100, 
тип type пока должен быть равен null.
Испорченное издание можно подклеить и тем самым улучшить его состояние. 
Создайте метод fix(), увеличивающий state в полтора раза. 
Метод не должен принимать аргументов.

Нельзя улучшить новое издание, и бесполезно подклеивать полностью уничтоженное. 
Для лучшего контроля над состоянием создайте «сеттер» для свойства state, 
принимающий в качестве аргумента новое состояние печатного издания (число).

Если новое состояние меньше 0, «сеттер» должен записать в свойство state значение 0. 
Если новое состояние больше 100, должно быть записано значение 100. 
В остальных случаях в свойство state должно быть записано переданное в «сеттер» значение.

Создайте «геттер», который позволит читать значение свойства state.*/

/*Создайте класс Magazine, который будет наследоваться от класса PrintEditionItem. 
Конструктор класса должен принимать такие же параметры, как и класс-родитель. 
От базового печатного издания журнал отличается только явно указанным типом. 
Значение свойства type должно быть равно "magazine".

Создайте класс Book, наследующийся от класса PrintEditionItem. 
Конструктор класса должен принимать такие же параметры, как и класс-родитель, а также имя автора книги author. 
Значение свойства type должно быть равно "book".

Создайте классы NovelBook для романов, FantasticBook для фантастических произведений и 
DetectiveBook для детективов, наследующиеся от класса Book. Значения свойства type должны быть 
равны "novel", "fantastic" и "detective" соответственно.*/

class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

get state () {
	return this._state;
}

set state (_state) {
	if (_state < 0) {
		return this._state = 0;
	} else
	if (_state > 100) {
		return this._state = 100;
	} else {
	return this._state = _state;
	}
}

fix() {
	return this.state = this.state * 1.5;
	}
}


class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor (author, name, releaseDate, pagesCount, state) {
		super (name, releaseDate, pagesCount, state);
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor (author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor (author, name, releaseDate, pagesCount, state) {
		super (author, name, releaseDate, pagesCount, state);
		this.type = 'fantastic';
	}	
}

class DetectiveBook extends Book {
	constructor (author, name, releaseDate, pagesCount, state) {
			super (author, name, releaseDate, pagesCount, state);
			this.type = 'detective';
		}	
}

/*ЗАДАЧА 2*/
class Library {
	constructor (name) {
		this.name = name;
		this.books = [];
}

addBook(book) {
	if (book.state > 30) {
		this.books.push(book);
	}
}

findBookBy(type, value) {
	let book = this.books.find(book => book [type] === value);
		if (book === undefined) {
	      return null;
	    }
    return book;
}

giveBookByName(bookName) {
	let book = this.books.find(book => book.name === bookName);
		if (book === undefined) {
	      return null;
	    } else {
	      this.books.splice(this.books.indexOf(book), 1);
	      return book;
	    }
 }
}

/*Реализуйте метод addBook(book), который будет в качестве аргумента принимать объект (книгу или журнал). 
Метод должен добавлять книгу в хранилище books, только если состояние state книги больше 30.

Создайте метод findBookBy(type, value), который в качестве аргументов будет принимать ключ, 
по которому будет производиться поиск (тип, автор, название, год выпуска и пр.) и искомое значение. 
Метод должен возвращать книгу в случае успеха и null, если запрошенная книга не была найдена.

Создайте метод giveBookByName(bookName), который будет в качестве аргумента принимать название книги, 
запрошенной читателем. Если запрошенная книга найдена, метод должен удалять книгу из хранилища books, 
и возвращать её. Если книга не была найдена, метод должен возвращать null.

Протестируйте корректность работы классов и методов, разыграв тестовый сценарий:
Создайте библиотеку;
Добавьте в библиотеку несколько печатных изданий различных типов;
Найдите книгу, изданную в 1919 году (создайте такую книгу при необходимости);
Выдайте любую книгу;
Испортите выданную книгу;
Почините выданную книгу;
Попытайтесь добавить починенную книгу обратно в библиотеку.*/