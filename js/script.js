function show(obj){
	this.background = obj.background;
	this.width = obj.width;
	this.cont = obj.cont;
	this.btn = obj.btn;
	this.height = obj.height;
	this.color = obj.color;
	this.init();
}
show.prototype.init = function(){
	var box = document.createElement("div");
	box.className = 'box';
	box.style.width = this.width+"px";
	box.style.height = this.height+"px";
	var p = document.createElement("p");
	var btn1 = document.createElement("input");
	var btn2 = document.createElement("input");
	btn1.type = 'button';
	btn1.value = this.btn[0];
	btn1.className = "left";
	btn2.type = 'button';
	btn2.value = this.btn[1];
	btn2.className = "right";
	p.innerHTML = this.cont;
	box.appendChild(p);
	box.appendChild(btn1);
	box.appendChild(btn2);
	document.body.appendChild(box);
	let that = this;
	btn1.onclick = function(){
		alert("这是" + that.btn[0]);
		box.style.display = "none";
	}
	btn2.onclick = function(){
		alert("这是"+that.btn[1]);
		box.style.display = "none";
	}
}
