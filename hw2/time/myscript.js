/*вывести число минут и сеукунд до конца сегодняшнего дня*/
var tomorrow = new Date().setHours(24, 0, 0);

(function foo() {
  var now = new Date();

  // Сколько секунд осталось до завтра.
  var seconds = parseInt(tomorrow - now) / 1000;

  // 3600 - кол-во секунд в часе. Сколько часов осталось до завтра
  var hh = parseInt( seconds / 3600 );
  var mm = parseInt( (seconds % 3600) / 60 );
  var ss = parseInt( (seconds % 3600) % 60 );
  
 
  
  alert("До конца дня осталось: "+hh+" часa "+mm+" минут "+ss+ " секунд");



})();