function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = args.join(', '); 
		let objectInCache = cache.findIndex(item => item.hash === hash);
	    
		if (objectInCache !== -1) {
				console.log("Из кэша: " + cache[objectInCache].result); 
				return "Из кэша: " + cache[objectInCache].result;
		} 

		let result = func(...args); 
		cache.push({hash, result}); 
		if (cache.length > 5) { 
			cache.shift(); 
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;  
		}
	return wrapper;
}



function debounceDecoratorNew(func, delay) {
	let timeout = null;

	function wrapper (...args) {
		if (timeout === null) {
			func(...args);
	  }
	  clearTimeout(timeout);
	  timeout = setTimeout(() => func(...args), delay);
	}
	return wrapper;
}




function debounceDecorator2(func,delay) {
	let timeout = null;
	
	function wrapper (...args){
		if (timeout === null) {
			func(...args);
			clearTimeout(timeout);
			timeout = setTimeout(() => func(...args), delay)
		} 
		wrapper.count++;
	} 
	wrapper.count = 0;
	return wrapper;
}

