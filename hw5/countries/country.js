var countries = [];
countries[0] = {
    name: "Австрия",
    flag: "Austria.png", 
    telCode: 43,    
    population:  8470000 ,
    
  }

countries[1] = {
    name: "Беларусь",
    flag: "bel.png", 
    telCode: 375,   
    population: 9498364,
    
  }

countries[2] = {
    name: "Россия",
    flag: "rus.png",
    telCode: 7,   
    population:146544710 ,
    
  }

countries[3] = {
    name: "Грузия" ,
    flag: "gruzia.png",
    telCode: 995,
    population:3729635,

  }

countries[4] = {
    name: "Чехия" ,
    flag: "Czech.png",
    telCode: 420,
    population:10564766,

  }

countries[5] = {
    name: "Эстония" ,
    flag: "estonia.png",
    telCode: 372,
    population:1317797,

  }

countries[6] = {
    name: "Словакия" ,
    flag: "slovakia.png",
    telCode: 421,
    population:5426252 ,

  }

  countries[7]={
    name: "Боливия" ,
    flag: "Bolivia.png",
    telCode: 591,
    population:11410651,

  }

  countries[8]={
    name: "Щвейцария" ,
    flag: "switz.png",
    telCode: 41,
    population:8341000,

  }

  countries[9]=
   {
    name: "Италия" ,
    flag: "it.png",
    telCode: 39,
    population:60674003,

  }

  countries[10]=
   {
    name: "Конго" ,
    flag: "kongo.png",
    telCode: 243,
    population:4662446,

  }
   
var table = document.createElement('table');
var thead = document.createElement('thead');
var tr = document.createElement('tr');
  for(var i = 0; i <=4; i++){
    var th = document.createElement('th');
    switch(i){
      case 0: th.innerHTML = "Флаг";
        break;
      case 1: th.innerHTML = "Страна";
        break;
      case 2: th.innerHTML = "Население";
        break
      case 3: th.innerHTML = "Телефонный код";  
        break;
    }
    tr.appendChild(th);
  }
thead.appendChild(tr);
table.appendChild(thead);

var tbody = document.createElement('tbody');
  for(var i = 0; i <=10; i++){
    tr = document.createElement('tr');
      for(var j = 0; j <=4; j++){
        var td = document.createElement('td');
        switch(j){
          case 0: td.innerHTML = "<img src =\"img/" + countries[i].flag + "\">";
            break;
          case 1: td.innerHTML = countries[i].name;
            break;  
          case 2: td.innerHTML = countries[i].population;
            break;  
          case 3: td.innerHTML = countries[i].telCode;
            break;    
        } 
        tr.appendChild(td);
      }
    tbody.appendChild(tr);  
  }
table.appendChild(tbody);
document.body.appendChild(table); 
