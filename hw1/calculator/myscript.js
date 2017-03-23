while (operation != 0) 
{
   var operation=prompt("Какую операцию вы хотите сделать?\n0: Выйти из программы\n1: Сложение\n2: Вычитание\n3: Умножение\n4: Деление\n","");

  if (operation>0 && operation<5)
  {
  var num1=parseInt(prompt("Введите первое число.",""));
  var num2=parseInt(prompt("Введите второе число.",""));
  if (operation==1) alert("Результат сложения "+(num1+num2));
  if (operation==2) alert("Результат вычитания "+(num1-num2));
  if (operation==3) alert("Результат умножение "+(num1*num2));
  if (operation==4) alert("Результат деления "+(num1/num2));
  }
  
}
