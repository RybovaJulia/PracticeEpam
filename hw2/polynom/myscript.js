var n = parseInt(prompt("Введите степень многочлена n:"));
var x = Number(prompt("Введите коэффициент x:"));
//является ли конечным числом
if(isFinite(n)&&isFinite(x)){
var arr = new Array(n), sum = 0;
for (var i = 0; i <= n; i++)
{
	arr[i] = Number(prompt("Введите arr[i]"));
  if(isFinite(arr[i])){
	sum += arr[i]*Math.pow(x,i);
}
else{
		alert("Ошибка.Пожалуйста введите число");
		break;
	}
}
console.log("Массив,состоящий из A[i] элементов: " ,arr, "Сумма массива: ", sum);
}
else{
	alert("Повторите попытку")
}
 


