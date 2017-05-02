var deshifrator = document.getElementById("Deshifrator");
var btn_shifr = document.getElementById("btn_shifr");
btn_shifr.addEventListener("click", function(){
    var result = "";
    var value = shifrator.value;
    
    for (var i = 0; i < value.length; i++){
        var char = value.charCodeAt(i);
        var charShifr = char + 2;
        result+= String.fromCharCode(charShifr);
   }
      deshifrator.value = result;
});

var shifrator = document.getElementById("Shifrator");
var btn_deshifr = document.getElementById("btn_deshifr");
btn_deshifr.addEventListener("click", function(){
    var result = "";
    var value = deshifrator.value;
    
    for (var i = 0; i < value.length; i++){
        var char = value.charCodeAt(i);
        var charShifr = char - 2;
        result+= String.fromCharCode(charShifr);
   }
      shifrator.value = result;
})