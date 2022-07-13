function parseCount (value) {
	parse = Number.parseInt(value);
	
	if (isNaN(parse)) {
		throw new Error ("Невалидное значение");
	} 
	return parse;
}

function validateCount(value) {
	try {
		return parseCount(value);
	}
	catch (Error){
		return Error;
	}
}


class Triangle {
  constructor(a,b,c) {
    if ((a + b) < c || (a + c) < b || (b + c) < a) {
      const errorTriangle = new Error("Треугольник с такими сторонами не существует")
      throw errorTriangle;
    };
    this.a = a;
    this.b = b;
    this.c = c;
  }

getPerimeter () {
	return this.a + this.b + this.c;
}

getArea () {
	let p = (this.a + this.b + this.c) / 2;
	let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
	return Number(area.toFixed(3));
  }
}

function getTriangle (a, b, c) {
	try {
		return new Triangle (a, b, c);
	}
	catch (err) {
	  return {
		getPerimeter () {
			return 'Ошибка! Треугольник не существует'; 
		},
		getArea () {
			return 'Ошибка! Треугольник не существует'; 
		}
	}
  }
}