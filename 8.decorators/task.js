function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
	    const hash = args.join(', '); 
	    let objectInCache = cache.findIndex(item => item.hash === hash); 	    
	    
	    if (objectInCache !== -1) {
	        console.log("Из кэша: " + cache[objectInCache].result); 
	        return "Из кэша: " + cache[objectInCache].result;
	    } else {

	    let result = func(...args); 
	    cache.push({hash, result}); 
	    if (cache.length > 5) { 
	      cache.shift(); 
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
	//return isThrottled = false;
	} //else if (isThrottled === false) {
		//clearTimeout(timeout);
	timeout = setTimeout(() => {
		func.apply(this, args);
	}, delay);
}
}


function debounceDecorator2(func,delay) {
	let isThrottled = true;
	let timeout;
	
	function wrapper (...args){
		wrapper.count = 0;
		
		if (isThrottled) {
			func.apply(this, args);
			wrapper.count.push (wrapper.count++);
			
			return func (wrapper.count);
			//return isThrottled = false;
		} //else if (isThrottled === false) {
			//clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(this, args);
		}, delay);
} return wrapper;
}

/*function debounceDecorator2(func,delay) {
	let isThrottled = true;
	let timeout;
	let count = 0; 

return function wrapper (...args){
	count++;
	wrapper.amount = count;
	console.log(wrapper.amount); 

	if (isThrottled) {
		func.apply(this, args);
		//return isThrottled = false;
	} //else if (isThrottled === false) {
		//clearTimeout(timeout);

	timeout = setTimeout(() => {
		func.apply(this, args);
	}, delay);
}
}*/

