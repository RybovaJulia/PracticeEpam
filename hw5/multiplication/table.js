var N = prompt("Введите число N строк таблицы");
var M = prompt("Введите число M столбцов таблицы");
var el = document.getElementById("multiply");
var table = document.createElement("table");
el.appendChild(table);

var tbody = document.createElement("tbody");
table.appendChild(tbody);
for(var i = 1; i <= 7; i++){

  var tr = document.createElement("tr");
  tbody.appendChild(tr);
  for(var j = 1; j <= 6; j++){
    var td = document.createElement("td");
    tr.appendChild(td);
    if(i==j){
      td.setAttribute("bgcolor","lightgreen");
    }
    td.innerHTML=i*j;
    tr.appendChild(td);
  }
}