    function clock(){	
	if(document.getElementById("canvas")!=undefined)
		document.getElementById("canvas").parentNode.removeChild(document.getElementById("canvas"));
    var canvasElement=document.createElement("canvas");
	canvasElement.setAttribute("width", 1000);
	canvasElement.setAttribute("height", 400);
	canvasElement.id="canvas";
	var context=canvasElement.getContext("2d");
	context.beginPath();
	context.fillStyle="rgba(88, 3, 107, 1)";
	context.arc(600,200, 110, 0, Math.PI*2);
	context.fill();
	context.closePath();
	context.beginPath();
	context.fillStyle="rgba(88, 3, 107, 1)" 
	context.arc(600,200, 150, 0, Math.PI*2);
	context.fill();
	context.closePath();
	context.beginPath();
	context.moveTo(520,200);
	context.lineTo(680,200);
	context.stroke();
	context.closePath();
	context.beginPath();
	context.moveTo(600,120);
	context.lineTo(600,280);
	context.stroke();
	context.closePath();
	context.beginPath();
	context.arc(600,200, 140, 0, Math.PI*2);
	context.fillStyle="rgba(255,255,255,1)";
	context.fill();
	context.closePath();
	context.beginPath();
	context.arc(600,200, 4, 0, Math.PI*2);
	context.fillStyle="rgba(0,0,0,1)";
	context.fill();
	context.closePath();
	context.font="20px Arial";
	context.textAlign="center";
	context.translate(600,200);
	context.fillText("12", 0, -120);
	context.rotate(Math.PI/2);
	context.fillText("3", 0, -120);
	context.rotate(Math.PI/2);
	context.fillText("9", 0, -120);
	context.rotate(Math.PI/2);
	context.fillText("9", 0, -120);
	context.rotate(Math.PI/2);
	var date=new Date();
	console.log(date);
	context.rotate((date.getHours()-12)*Math.PI*2/12);
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(0, -45);
	context.stroke();
	context.closePath();
	context.rotate(-(date.getHours()-12)*Math.PI*2/12);
	context.rotate(date.getMinutes()*Math.PI/30);
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(0, -77);
	context.stroke();
	context.closePath();
	context.rotate(-date.getMinutes()*Math.PI/30);
	context.rotate(date.getSeconds()*Math.PI/30);
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(0, -85);
	context.stroke();
	context.closePath();
	console.log(date.getSeconds());
	context.rotate(-date.getSeconds()*Math.PI/30);
	document.body.appendChild(canvasElement);
}
window.setInterval(clock, 1000);



