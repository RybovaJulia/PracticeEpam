'use strict';

// FRAMEWORK
var framework={
Get:{
	byId: function(id){
		return document.getElementById(id);
	},
	byTag:function(tag){
		return document.getElementsByTagName(tag);
	},
	byClass:function(className){
		return document.getElementsByClassName(className);
	},
	byName:function(name){
		return document.getElementsByName(name);
	},
	querySelector:function(querySelector){
		return document.querySelector(querySelector);
	},
	randomNumber:function(min,max){
		return min+(max-min)*Math.random();
	}
},

create:function(el){
	return document.createElement(el);
},

append:function (el, target){
	return target.appendChild(el);
},

prepend:function (el, target){
	return target.insertBefore(el, target.firstChild);
},

remove:function (el){
	return el.parentNode.removeChild(el);
},

replace:function (el, target){
	return target.parentNode.replaceChild(el, target);
},

isEmpty:function (el){
	if(el.childNodes.length==0)
		return "empty";
	else
		return "not empty";
},
copy: function(el,target){
	return target.appendChild(el.cloneNode());
},
copyPre: function(el, target){
	return target.insertBefore(el.cloneNode(), target.firstChild);
}

}
  //  /FRAMEWORK

var countries = [
{
		name: "Австрия",
		flag: "js/img/Austria.png", 
		telCode: 43,		
		population:  8470000 ,
		
	},
	{
		name: "Беларусь",
		flag: "js/img/bel.png", 
		telCode: 375,		
		population: 9498364,
		
	}, 
	{
		name: "Россия",
		flag: "js/img/rus.png",
		telCode: 7,		
		population:146544710 ,
		
	},{
		name:"Украина" ,
		flag: "js/img/ukr.png",
		telCode: 380,		
		population:42488512 ,
		
	},
	{
		name: "Грузия" ,
		flag: "js/img/gruzia.png",
		telCode: 995,
		population:3729635,

	},
	{
		name: "Чехия" ,
		flag: "js/img/Czech.png",
		telCode: 420,
		population:10564766,

	},
	{
		name: "Эстония" ,
		flag: "js/img/estonia.png",
		telCode: 372,
		population:1317797,

	},
	{
		name: "Словакия" ,
		flag: "js/img/slovakia.png",
		telCode: 421,
		population:5426252 ,

	},
	{
		name: "Боливия" ,
		flag: "js/img/Bolivia.png",
		telCode: 591,
		population:11410651,

	},
	{
		name: "Щвейцария" ,
		flag: "js/img/switz.png",
		telCode: 41,
		population:8341000,

	},
	 {
		name: "Италия" ,
		flag: "js/img/it.png",
		telCode: 39,
		population:60674003,

	},
	 {
		name: "Конго" ,
		flag: "js/img/kongo.png",
		telCode: 243,
		population:4662446,

	},
	 
];

var properties=[];
properties[0]="Название страны";
properties[1]="Флаг";
properties[2]="Телефонный код";
properties[3]="Численность населения";



var table=framework.create("table");

var tr=[];

var th=[];
var td=[];
for(var i=0; i<countries.length+1; i++){
	tr[i]=framework.create("tr");
	framework.append(tr[i], table)
	for(var j=0; j<properties.length; j++){

		if(i==0&&j>=0){
			th[j]=framework.create("th");
			th[j].innerHTML=properties[j];
			framework.append(th[j], tr[i]);
		}
		if(i>0&&j==0){
			td[j]=framework.create("td");
			td[j].innerHTML=countries[i-1].name;
			framework.append(td[j], tr[i]);
		}
		if(i>0&&j==1){
			td[j]=framework.create("td");
			td[j].innerHTML="<img src="+countries[i-1].flag+">";
			framework.append(td[j], tr[i]);
		}
		if(i>0&&j==2){
			td[j]=framework.create("td");
			td[j].innerHTML='+'+countries[i-1].telCode;
			framework.append(td[j], tr[i]);
		}
		if(i>0&&j==3){
			td[j]=framework.create("td");
			td[j].innerHTML=countries[i-1].population;
			framework.append(td[j], tr[i]);
		}
		
	}
}

document.body.appendChild(table);












