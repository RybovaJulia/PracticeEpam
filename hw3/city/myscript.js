var arr = ['Milania', 'Medison' ,'Michael', 'Kalania','Julia','Stephan','	Andrew','Daniel','Makenzie','Katricia','Tolik', 'Lucas','Elizio','Alex','Ilya'];
var arr1=['Moscow','Praga','Wien','Budva','Cincinnati','Pittsburgh'];
var human=[];
for (var i = 0; i < arr.length; i++) {
	human[i]={
		name: arr[i],
		town: arr1[parseInt((arr1.length-1)*Math.random())],
		age: parseInt(100*Math.random())
	}
};
human.sort(function(a, b){
	return (a.age < b.age)? 1:-1;
})
for (var i = 0; i < arr.length; i++) {
	document.body.innerHTML+= '' + human[i].name +' -'+human[i].town+'-'+human[i].age +"<br>";
};
