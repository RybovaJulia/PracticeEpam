var str =prompt("Введите строку,содержащую круглые скобки.","");;
 
function testBrackets (str)
{
var numOpen = numClose = 0;
for (var j = 0, J = str.length; j < J; j++)
   {
   if (str [j] == '(') numOpen++; 
   if (str [j] == ')') if (++numClose > numOpen) return false;
   }

if (numClose != numOpen) return false
return true;
}
 
alert (testBrackets (str));
