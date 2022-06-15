'use strict';

function solveEquation(a, b, c) {
  const arr = [];
  const discriminant = b**2 - 4 * a * c;
  //let discriminantRoot1;
 // let discriminantRoot2;

  if (discriminant > 0) {
  //	discriminantRoot1 = (-b + Math.sqrt(discriminant) ) / (2 * a);
  //  discriminantRoot2 = (-b - Math.sqrt(discriminant) ) / (2 * a);
    arr.push( (- b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a));
  } else if (discriminant === 0) {
  	let discriminantRoot = -b / (2 * a);
  	arr.push (discriminantRoot);
  } 

  return arr; // array
}


//-----------------------------------------------------------------------//
//function calculateTotalMortgage(percent, contribution, amount, date) { 
//процентная ставка, сумма первоначального взноса, сумма кредита и срок (дата окончания кредита)
 // let totalAmount;
 // let creditBody = amount - contribution;


  // код для задачи №2 писать здесь
	//+ Посчитайте тело кредита: сумма, которую необходимо вернуть банку (сумма кредита минус первоначальный взнос).
	//Посчитайте на какой срок был выдан кредит (в месяцах).
	//Ежемесячная оплата рассчитывается по формуле: Платеж = S * (P + (P / (((1 + P)^n) - 1))), где: 
	//+S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
	//Посчитайте общую сумму, которую придется заплатить клиенту.
	//Округлите результат до двух значений после запятой.
	//Выведите результат в консоль, а также верните его из функции. Результатом функции должно 
	//быть значение числового типа.
  	//Обратите внимание, что в инпуте пользователь указывает конечную дату, 
  	//поэтому в функции необходимо посчитать срок в месяцах на основе введенной даты. 
  	//(вам потребуется использовать встроенный объект Date)


 // return totalAmount;
//}
