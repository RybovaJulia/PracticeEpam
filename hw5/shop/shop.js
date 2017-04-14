var names = ["Ксюша","Элина","Карина","Элизабет","Алена","Надя","Маккензи",
  "Елена","Хлоя","Джастина","Катрин","Илона","Вета","Мэдисон","Калания"];
var cities = ["Ланкастер", "Питтсбург", "Вена", "Атланта", "Кливленд", "Сент-Пол", "Модесто", "Глендейл"];
var items = [];
items[0]={
  img: "1.png",

  name: "Булавы \"Сассаки\""
}
items[1]={
  img: "2.png",
  name: "Пуанты \"Grishko\""
}
items[2]={
  img: "3.png",
  name: "Кроссовки Nike \"Huarache\""
}
items[3]={
  img: "4.png",
  name: "Спортивная сумка \"Puma\""
}
items[4]={
  img: "5.png",
  name: " Майка \"Reebok\""
}
items[5]={
  img: "6.png",
  name: " Бутылка \"My bottle\""
}
var shop = document.getElementsByClassName('shop');
setInterval(function(){
  time = Math.random()*1800 + 2700;
  el = document.createElement('div');
  var index = parseInt(Math.random() * items.length);
  var str = "<img src=\"img/" + items[index].img + "\">";
  str += "<p>" + names[parseInt(Math.random() * names.length)] + " из города " + cities[parseInt(Math.random() * cities.length)] ;
  str += " купила " + parseInt(Math.random() * 10 +1) + " шт. " + items[index].name + "</p>";
  el.innerHTML = str;
  var closeIcons = document.createElement('a');
  closeIcons.onclick = function(){
  this.parentNode.remove()
  }
  el.appendChild(closeIcons);
  shop[0].appendChild(el);
},1500)