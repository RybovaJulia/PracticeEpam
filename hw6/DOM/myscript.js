var elem = 0;
var comment = 0;
var text = 0;

var func = function(element){
	console.log(element);

	if(element.nodeType == 1) 	
		elem++;
	if(element.nodeType == 3) 
		text++;
	if(element.nodeType == 8) 
		comment++;

	if(element.childNodes.length){
		for (var i = 0; i < element.childNodes.length; i++) {
			func(element.childNodes[i]);
		}
	}
}
func(document);

console.log("Tags: " + elem);
console.log("Comments :" + comment);
console.log("Text :" + text);