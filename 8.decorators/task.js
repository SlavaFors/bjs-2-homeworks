function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
	    const hash = args.join(', '); // получаем правильный хэш

	    let objectInCache = cache.find((item) => item.hash === args.join(', ')); // ищем элемент, 
	    //хэш которого равен нашему хэшу
	    
	    if (!objectInCache) { // если элемент не найден
	        console.log("Из кэша: " + cache[objectInCache].result); // индекс нам известен, по индексу в массиве лежит объект, 
	        //как получить нужное значение?
	        return "Из кэша: " + cache[objectInCache].result;
	    } else {

	    let result = func(...args); // в кэше результата нет - придётся считать
	    cache.push({hash, result}); // добавляем элемент с правильной структурой
	    if (cache.length > 5) { 
	      cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
	    }
	    console.log("Вычисляем: " + result);
	    return "Вычисляем: " + result;  
	}
 };	
	return wrapper;
}



function debounceDecoratorNew(func, delay) {
  let isThrottled = true;
  let timeout;

  return function (...args) {
  	if (isThrottled) {
  		func.apply(this, args);
      	return isThrottled = false;
  	} else if (isThrottled === false) {
  		clearTimeout(timeout);

  		timeout = setTimeout(() => {
  		    func.apply(this, args);
        }, delay);
  }
 }
}


function debounceDecorator2(func,delay) {
    let isThrottled = true;
  	let timeout;
  	let count = 0; 

 return function wrapper (...args){
 	count++;
 	wrapper.history = count;
    console.log(wrapper.history); 

  	if (isThrottled) {
  		func.apply(this, args);
      	return isThrottled = false;
  	} else if (isThrottled === false) {
  		clearTimeout(timeout);

  		timeout = setTimeout(() => {
  		    func.apply(this, args);
        }, delay);
  }
 }
}