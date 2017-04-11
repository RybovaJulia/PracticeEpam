var elem = document.getElementsByTagName('*');
var res = document.getElementById('result');
var i = 0,stop = elem.length;
(
  function closers(){
result.innerHTML +=' '+ elem[i].tagName; 
i++;
if(i < stop)setTimeout(closers,0);
}()
);

