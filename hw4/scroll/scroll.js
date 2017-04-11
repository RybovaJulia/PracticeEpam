function scroll(a){
	return Math.pow(a, 2);
}
var a = 1;
var id = setInterval(function(){
	window.scrollBy(0, scroll(a));
		a++;
	if( window.scrollY + window.innerHeight >= 15000){
		clearInterval(id);
	}
			
}, 200)