var arrname = ['Alex', 'Jacob' ,'Michael', 'Joshua','Matthew','Ethan','Andrew','Daniel','William',
'Joseph','Christopher', 'Anthony','Ryan','Nicholas','David','Tyler','James',
'John','Dylan','Nathan'];
var house={
	human:[],
	flat:[],
	addHuman:function(){
		a=prompt('Введите имя нового жильца');
		b=prompt('Введите номер квартиры нового жильца');
		if (b<16) {
			this.human.push({name:a, numFlat:b});
		this.flat[b].lodgers.push({name:a,numFlat:b})}
		else {alert('Неправильный номер квартиры')}
		
},
	listHuman:function(){
		c=prompt('Введите номер квартиры чьих жителей хотите узнать');
		if (c<16) {
			if (this.flat[c].lodgers.length!=0) {
			(this.flat[c].lodgers.forEach(function(e){
				console.log(e.name)
			}))
		}
		else{
			alert('В этой квартире пока никто не живет')
		}}
		else{alert('Неправильный номер квартиры')}
		

	},
	clearFlat:function(){
		c=prompt('Какую квартиру хотите очистить?');
		if (c<16) {if (this.flat[c].lodgers.length!=0) {
			this.flat[c].lodgers.length=0
			console.log('Жильцы выселены')
		}
		else{
			console.log('Квартира пуста')
		}}
		else {alert('Неправильный номер квартиры')}
		
	},
	 Communal:function(){
	 	costs=prompt('Введите суммарные коммунальные расходы')
	 	for (var i = 1; i < 16; i++) {
	 		if (this.flat[i].lodgers.length!=0) {
	 			var abr=parseInt(costs/squere)*(this.flat[i].sq/this.flat[i].lodgers.length)
			for (var j=0;j<this.flat[i].lodgers.length;j++){
				console.log('Стоимость коммунальных расходов для '+this.flat[i].lodgers[j].name+' - '+abr)
			}
	 		};
	 		
	 	};
	}
};
//Создаем массив квартир
for (var i = 1; i <16; i++) {
	house.flat[i]={
		sq:parseInt(50*Math.random()+30),
		floor: parseInt(5*Math.random()+1),
		lodgers:[]
	}
};
//Создаем массив жильцов
var arrname = ['Milania', 'Medison' ,'Michael', 'Kalania','Julia','Stephan','	Andrew','Daniel','Makenzie','Katricia','Tolik', 'Lucas','Elizio','Alex','Ilya'];
var home={
	people:[],
	flat:[],
	addPeople:function(){
		a=prompt('Введите имя нового жильца квартиры');
		b=prompt('Введите номер квартиры нового жильца');
		if (b<16) {
			this.people.push({name:a, numFlat:b});
		this.flat[b].lodgers.push({name:a,numFlat:b})}
		else {alert('Неправильный номер квартиры')}
		
},
	listPeople:function(){
		c=prompt('Введите номер квартиры,жителей которых вы хотите узнать');
		if (c<16) {
			if (this.flat[c].lodgers.length!=0) {
			(this.flat[c].lodgers.forEach(function(e){
				console.log(e.name)
			}))
		}
		else{
			alert('К сожалению,в этой квартире никто не живет')
		}}
		else{alert('Неверный номер квартиры')}
		

	},
	clearFlat:function(){
		c=prompt('Какую квартиру желаете очистить?');
		if (c<16) {if (this.flat[c].lodgers.length!=0) {
			this.flat[c].lodgers.length=0
			console.log('Жильцы выселены')
		}
		else{
			console.log('Квартира пуста')
		}}
		else {alert('Неверный номер квартиры')}
		
	},
	 Communal:function(){
	 	costs=prompt('Введите суммарные коммунальные расходы')
	 	for (var i = 1; i < 16; i++) {
	 		if (this.flat[i].lodgers.length!=0) {
	 			var abr=parseInt(costs/squere)*(this.flat[i].sq/this.flat[i].lodgers.length)
			for (var j=0;j<this.flat[i].lodgers.length;j++){
				console.log('Стоимость коммунальных расходов для '+this.flat[i].lodgers[j].name+' - '+abr)
			}
	 		};
	 		
	 	};
	}
};
for (var i = 1; i <16; i++) {
	home.flat[i]={
		sq:parseInt(50*Math.random()+30),
		floor: parseInt(5*Math.random()+1),
		lodgers:[]
	}
};
for (var i = 0; i < arrname.length; i++) {
	home.people[i]={
		name: arrname[i],
		numFlat: parseInt(14*Math.random()+1)
	}
	home.flat[home.people[i].numFlat].lodgers.push(home.people[i]);
};
var squere=0
for (var i = 1; i < 16; i++) {
	if (home.flat[i].lodgers.length!=0) {
		squere= squere+home.flat[i].sq
	};
};
