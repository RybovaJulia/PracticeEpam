var n = parseInt(prompt("Введите n количество элементов массива:"));
var s = parseInt(prompt("Введите значение s"));
var p = parseInt(prompt("Введите значение p"));
var per,avr=0;
var arr = new Array(n);
per=s*p/100;
var max=s+per;
var min=s-per;
var maxN;
var maxIndex;
var sum = 0;

if(isFinite(n) && isFinite(p) && isFinite(s)){
	for(var i = 0; i < arr.length; i++){
	arr[i]=Math.round((Math.random()*(max-min)+min)*100)/100;	
}
console.log(arr);
for(var j=0; j<n; j++){
	maxN = arr[0];
	maxIndex = 0;
	for(var  i =0; i < n-j; i++){
		if(arr[i] > maxN){
			maxN = arr[i];
			maxIndex = i;
			
		}

	}
	arr[maxIndex] = arr[n-j-1];
	arr[n-j-1] = maxN;
	sum += maxN;
}
console.log(arr);
console.log("Сумма: " + sum);
console.log("Среднее арифметическое равно: " + sum/n);
}
else{
	alert("Повторите попытку")
}